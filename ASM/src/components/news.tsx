
import { IProduct } from '../interface/Product';
import { Link } from 'react-router-dom';
import useProductQuery from '../hooks/useProductQuery';
import { useLocalStorage } from '@/hooks/useStorage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


type newsProps = {
    featured?: boolean,
    data?: IProduct[]
}
const news = ({ featured, data }: newsProps) => {
    // const { products } = useContext(ProductContext);
    const queryClient = useQueryClient();
    const [user] = useLocalStorage('user', {})
    const userId = user?.user?._id
    const { data: products, isLoading, isError } = useProductQuery();
    const { mutate } = useMutation({
        mutationFn: async ({ productId, quantity }: { productId: any, quantity: number }) => {
            const { data } = await axios.post(`http://localhost:3000/api/v1/cart/add-to-cart`, {
                userId,
                productId,
                quantity
            })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cart", userId]
            })
        }
    })
    const filteredProduct = featured
        ? products?.filter((product: IProduct) => product?.featured == featured)
        : data
            ? data
            : products

    console.log(products)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <p>Error</p>
    return (
        <div>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">New</h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            {
                                filteredProduct?.map((item: IProduct, index: number) => {
                                    if (index < 4) {
                                        return (
                                            <div key={index} className="product-item">
                                                <div className="product-image">
                                                    <img src={item?.image} alt="" className="product__thumbnail" />
                                                    <span className="product__sale">-{item.discount}%</span>
                                                </div>
                                                <div className="product-info">
                                                    <h3 className="product__name">
                                                        <a href="" className="product__link">{item?.name}</a>
                                                    </h3>
                                                    <a href="" className="product__category">{item?.description}</a>
                                                    <div className="product-price">
                                                        <span className="product-price__new">{(item?.price - (item?.price * (item.discount / 100))).toLocaleString('vi-VN')}đ</span>
                                                        <span className="product-price__old">{item?.price.toLocaleString('vi-VN')}đ</span>
                                                    </div>
                                                </div>
                                                <div className="product-actions">
                                                    <Link to={`/products/${item._id}`} className="product__linkdetail">Quick View</Link>
                                                    <button className="btn product-action__addtocart" onClick={() => mutate({ productId: item._id, quantity: 1 })}>Add To Cart</button>
                                                    <div className="product-actions-more">
                                                        <i className="fa-solid fa-share-nodes"></i><span className="product-action__share">Share</span>
                                                        <i className="fa-solid fa-arrow-right-arrow-left"></i><span className="product-action__compare">Compare</span>
                                                        <i className="fa-regular fa-heart"></i><span className="product-action__like">Like</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }



                                })
                            }


                        </div>

                    </div>
                    <hr className="product-hr"></hr>
                </div>
            </section >
        </div >
    )
}

export default news
