import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../interface/Product";
import { addProduct, deleteProduct, updateProduct } from "../services/product";

type useProductMutationProps = {
    action: "CREATE" | "UPDATE" | "DELETE"
}
const useProductMutation = ({ action }: useProductMutationProps) => {
    const navigate = useNavigate()
    // const { addProduct } = useContext(ProductContext)
    const queryClient = useQueryClient()
    const form = useForm();
    const { mutate, ...rest } = useMutation({
        mutationFn: async (product: IProduct) => {
            switch (action) {
                case "CREATE":
                    await addProduct(product)
                    break;
                case "UPDATE":
                    await updateProduct(product)
                    break;
                case "DELETE":
                    await deleteProduct(product._id!)
                    break;
                default:
                    return null;

            }

        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['PRODUCT_KEY'] })
            if (action == "CREATE") {
                alert('Thêm thành công');
                navigate('/admin/products')
            } else if (action == "UPDATE") {
                alert('Update thành công');
                navigate('/admin/products')
            }

        }
    })
    const onSubmit = (product: IProduct) => {
        if (action == "CREATE" || action == "UPDATE") {
            mutate(product);
        } else if (action == "DELETE") {
            if (confirm('Bạn có muốn xóa không')) {
                mutate(product)
            }
        }

    }
    return { form, onSubmit, ...rest, mutate }
}

export default useProductMutation
