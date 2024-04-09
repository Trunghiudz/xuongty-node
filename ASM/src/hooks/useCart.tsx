import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./useStorage";
import axios from "axios";
import { reduce } from "lodash";

const useCart = () => {
    const queryClient = useQueryClient();
    const [user] = useLocalStorage('user', {})
    const userId = user?.user?._id;
    const { data, ...restQuery } = useQuery({
        queryKey: ["cart", userId],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/api/v1/cart/${userId}`)
            return data
        }
    })
    const { mutate } = useMutation({
        mutationFn: async ({ action, productId }: { action: string, productId: string }) => {
            switch (action) {
                case "INCREMENT":
                    await axios.post(`http://localhost:3000/api/v1/cart/increase`, {
                        userId,
                        productId
                    })
                    break;
                case "DECREMENT":
                    await axios.post(`http://localhost:3000/api/v1/cart/decrease`, {
                        userId,
                        productId
                    })
                    break;
                case "REMOVE":
                    await axios.post(`http://localhost:3000/api/v1/cart/remove`, {
                        userId,
                        productId
                    })
                    break;
                default:
                    break;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const removeMutation = useMutation({
        mutationFn: async (productId) => {
            const { data } = await axios.post(`http://localhost:3000/api/v1/cart/remove`, {
                userId,
                productId
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const incrementMutation = useMutation({
        mutationFn: async (productId) => {
            const { data } = await axios.post(`http://localhost:3000/api/v1/cart/increase`, {
                userId,
                productId
            })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const decrementMutation = useMutation({
        mutationFn: async (productId) => {
            const { data } = await axios.post(`http://localhost:3000/api/v1/cart/decrease`, {
                userId,
                productId
            })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })

    const calculateTotal = () => {
        if (!data || !data.products) return 0;
        return reduce(data.products,
            (total, product) => total + product.price * product.quantity, 0
        )
    }
    return {
        data,
        mutate,
        calculateTotal,
        ...restQuery
    }
}
export default useCart