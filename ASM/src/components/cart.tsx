import { useLocalStorage } from '@/hooks/useStorage'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { reduce } from 'lodash'
import useCart from '@/hooks/useCart';
const Cart = () => {
    const { data, calculateTotal, mutate, isLoading, isError } = useCart();
    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ["cart", userId],
    //     queryFn: async () => {
    //         const { data } = await axios.get(`http://localhost:3000/api/v1/cart/${userId}`)
    //         return data
    //     }
    // })
    // const removeMutation = useMutation({
    //     mutationFn: async (productId) => {
    //         const { data } = await axios.post(`http://localhost:3000/api/v1/cart/remove`, {
    //             userId,
    //             productId
    //         })
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({
    //             queryKey: ["cart", userId]
    //         })
    //     }
    // })
    // const incrementMutation = useMutation({
    //     mutationFn: async (productId) => {
    //         const { data } = await axios.post(`http://localhost:3000/api/v1/cart/increase`, {
    //             userId,
    //             productId
    //         })
    //         return data
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({
    //             queryKey: ["cart", userId]
    //         })
    //     }
    // })
    // const decrementMutation = useMutation({
    //     mutationFn: async (productId) => {
    //         const { data } = await axios.post(`http://localhost:3000/api/v1/cart/decrease`, {
    //             userId,
    //             productId
    //         })
    //         return data
    //     },
    //     onSuccess: () => {
    //         queryClient.invalidateQueries({
    //             queryKey: ["cart", userId]
    //         })
    //     }
    // })

    // const calculateTotal = () => {
    //     if (!data || !data.products) return 0;
    //     return reduce(data.products,
    //         (total, product) => total + product.price * product.quantity, 0
    //     )
    // }
    if (isLoading) return <h2>Loading...</h2>;
    if (isError) return <div>Error</div>;

    return (
        <div>
            <section className="cart">
                <div className="container">
                    <div className="cart-item">
                        <div className="cart-table">
                            <table className="cart__table">
                                <thead className="cart-thead">
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th></th>
                                    </tr>

                                </thead>
                                <tbody className="cart-tbody">
                                    {
                                        data?.products.map((product: any, index: number) => {
                                            return (
                                                <tr key={index}>
                                                    <td><img src={product.image} alt="" className="cart__img" /></td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price.toLocaleString('vi-VN')}đ</td>
                                                    <td>
                                                        <button onClick={() => mutate({
                                                            action: "INCREMENT",
                                                            productId: product.productId
                                                        })}>+</button>
                                                        <input type="text" min="0" value={product.quantity} className="cart__input" />
                                                        <button onClick={() => mutate({
                                                            action: "DECREMENT",
                                                            productId: product.productId
                                                        })}>-</button>
                                                    </td>
                                                    <td className="cart__price">{(product.price * product.quantity).toLocaleString('vi-VN')}đ</td>
                                                    <td><button className="cart__btn"><img src="../src/img/ant-design_delete-filled.svg"
                                                        alt="" onClick={() => mutate({
                                                            action: "REMOVE",
                                                            productId: product.productId
                                                        })} /></button></td>
                                                </tr>
                                            )
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                        <div className="cart-total">
                            <div className="cart-content">
                                <div className="cart-titel">
                                    <p className="cart__titel">Cart Totals</p>
                                </div>
                                <div className="cart-subtotal">
                                    <table className="cart__subtotal">
                                        <tr>
                                            <th>Subtotal</th>
                                            <td className="cart__priceright">{calculateTotal().toLocaleString('vi-VN')}đ</td>

                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td className="cart__pricebottom">{calculateTotal().toLocaleString('vi-VN')}đ</td>
                                        </tr>

                                    </table>
                                </div>
                                <div className="cart-checkout">
                                    <a href="./order"><button className="cart-btn">Check Out</button></a>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Cart
