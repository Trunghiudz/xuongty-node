import useCart from '@/hooks/useCart'
import { useLocalStorage } from '@/hooks/useStorage'
import { IProduct } from '@/interface/Product'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate()
    const form = useForm();
    const [user] = useLocalStorage('user', {})
    const userId = user?.user?._id
    const { data, calculateTotal } = useCart();
    console.log(data)
    const { mutate } = useMutation({
        mutationFn: async (order: { userId: string, items: [], totalPrice: number, customerInfo: object }) => {
            const { data } = await axios.post('http://localhost:3000/api/v1/order', order)
            return data
        },
        onSuccess: () => {
            alert("Đặt hàng thành công")
            // navigate('/')
        }
    })
    const onSubmit = (formData: object) => {
        mutate({
            userId: userId,
            items: data?.products,
            totalPrice: calculateTotal(),
            customerInfo: formData
        })
    }
    return (
        <div>
            <section className="checkout">
                <div className="container">
                    <div className="checkout-content">
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="checkout-bill">
                                <div className="checkout-titel">
                                    <p className="checkout__titel">Billing details</p>
                                </div>
                                <div className="checkout-optional">
                                    <label htmlFor="">Name</label><br />
                                    <input className="checkout__inputbottom" type="text" {...form.register('name')} />
                                </div>
                                {/* <div className="checkout-optional">
                                    <label htmlFor="">Country / Region</label><br />
                                    <select className="checkout-option">
                                        <option value="" className="checkout__option">Sri Lanka</option>
                                    </select>
                                </div> */}
                                {/* <div className="checkout-optional">
                                    <label htmlFor="">Street address</label><br />
                                    <input className="checkout__inputbottom" type="text" />
                                </div> */}
                                <div className="checkout-optional">
                                    <label htmlFor="">Town / City</label><br />
                                    <input className="checkout__inputbottom" type="text" {...form.register('city')} />
                                </div>
                                {/* <div className="checkout-optional">
                                    <label htmlFor="">Province</label><br />
                                    <select className="checkout-option">
                                        <option className="checkout__option">Western Province</option>
                                    </select>
                                </div> */}
                                {/* <div className="checkout-optional">
                                    <label htmlFor="">ZIP code</label><br />
                                    <input className="checkout__inputbottom" type="text" />
                                </div> */}
                                <div className="checkout-optional">
                                    <label htmlFor="">Phone</label><br />
                                    <input className="checkout__inputbottom" type="text" {...form.register('phone')} />
                                </div>
                                <div className="checkout-optional">
                                    <label htmlFor="">Email address</label><br />
                                    <input className="checkout__inputbottom" type="text" {...form.register('email')} />
                                </div>
                                {/* <div className="checkout-optional">
                                    <label htmlFor=""></label><br />
                                    <input className="checkout__inputbottom" type="text" placeHolder="Additional information" />
                                </div> */}
                                <div className="checkout-place">
                                    <button className="checkout-btn" type='submit'>Place order</button>
                                </div>
                            </div>
                        </form>


                        <div className="checkout-order">
                            <div className="checkout-table">
                                <table className="checkout__table">
                                    <tr>
                                        <th className="checkout__th">Product</th>
                                        <td className="checkout__td">Subtotal</td>
                                    </tr>
                                    {
                                        data?.products?.map((item: IProduct, index: number) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <th className="checkout__sofa">{item?.name}x{item.quantity}</th>
                                                        <td className="checkout__tdright">{(item?.price * item?.quantity).toLocaleString('vi-VN')}đ</td>
                                                    </tr>

                                                </>
                                            )

                                        })
                                    }
                                    <tr>
                                        <th className="checkout__total">Subtotal</th>
                                        <td className="checkout__tdright">{calculateTotal().toLocaleString('vi-VN')}đ</td>
                                    </tr>
                                    <tr>
                                        <th className="checkout__total">Total</th>
                                        <td className="checkout__right">{calculateTotal().toLocaleString('vi-VN')}đ</td>
                                    </tr>

                                </table>
                            </div>
                            <hr />
                            <div className="checkout-direct">
                                <input type="radio" value="Direct Bank Transfer" className="checkout-radio" checked /> Direct Bank
                                Transfer<br />
                                <p className="checkout__description">Make your payment directly into our bank account. Please
                                    use
                                    your
                                    Order ID as the payment reference. Your order will not be shipped until the funds have
                                    cleared
                                    in our account.</p>
                                <input type="radio" value="Direct Bank Transfer" className="checkout-radio" /> Direct Bank
                                Transfer<br />
                                <input type="radio" value="Direct Bank Transfer" className="checkout-radio" /> Cash On
                                Delivery<br />
                                <p className="checkout__end">Your personal data will be used to support your experience
                                    throughout
                                    this
                                    website, to manage access to your account, and htmlFor other purposes described in our
                                    privacy
                                    policy.</p>
                            </div>
                            {/* <div className="checkout-place">
                                <button className="checkout-btn">Place order</button>
                            </div> */}
                        </div>
                    </div>

                </div >
            </section >
        </div >
    )
}

export default Order
