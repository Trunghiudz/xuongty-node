import React from 'react'
import useProductQuery from '../hooks/useProductQuery';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IProduct } from '@/interface/Product';

const Detail = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError } = useProductQuery(id);
    const relatedProduct = useQuery({
        queryKey: ["RELATED_PRODUCT", product],
        queryFn: async () => {
            try {
                if (product) {

                    const { data } = await axios.get(`http://localhost:3000/api/v1/products/${product?.category}/related/${product._id}`)
                    return data
                }
            } catch (error) {
                console.log(error)
            }


        }
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <>
            <section className="detail">
                <div className="container">
                    <div className="detail-product">
                        <div className="detail-item">
                            <div className="detail-img">
                                <img src="../../src/img/Group 94.svg" alt="" />
                                <img src="../../src/img/Group 98.svg" alt="" />
                                <img src="../../src/img/Group 97.svg" alt="" />
                                <img src="../../src/img/Group 96.svg" alt="" />
                            </div>
                            <div className="detail-avatar">
                                <img src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="detail-content">
                            <h1 className="detail-h1">{product?.name}</h1>
                            <div className="detail-price">
                                <span>{(product?.price - (product?.price * (product.discount / 100))).toLocaleString('vi-VN')}đ</span>
                            </div>
                            <div className="detail-review">
                                <img src="../../src/img/Group 88.svg" alt="" className="detail__star" />
                                <div className="detail__customer">
                                    <div className="detail__review">
                                        <span className="">5 Customer Review</span>
                                    </div>

                                </div>
                            </div>
                            <div className="detail-describe">
                                <span>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
                                    stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
                                    highs htmlFor a sound.
                                </span>
                            </div>
                            <div className="detail-size">
                                <div className="detail-heading">
                                    <span>Size</span>
                                </div>
                                <div className="detail-body">
                                    <div className="detail-select">
                                        <div className="detail__L">
                                            <a href="" className="detail__text">L</a>
                                        </div>
                                        <div className="detail__L">
                                            <a href="" className="detail__text">XL</a>
                                        </div>
                                        <div className="detail__L">
                                            <a href="" className="detail__text">XS</a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="detail-color">
                                <div className="detail-heading">
                                    <span>Color</span>
                                </div>
                                <div className="detail-body">
                                    <div className="detail__color">
                                        <div className="detail__red"></div>
                                        <div className="detail__blue"></div>
                                        <div className="detail__black"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-button">
                                <div className="detail-number">
                                    <button className="detail__minus">-</button>
                                    <div className="detail__number">1</div>
                                    <button className="detail__minus">+</button>
                                </div>
                                <div className="detail-cart">
                                    <button className="detail__add">Add To Cart</button>
                                </div>
                                <div className="detail-compare">

                                    <div className="detail__compare">
                                        <span className="detail__span">+</span>
                                        <span>Compare</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="detail-end">
                                <div className="detail-sku">
                                    <span>SKU</span>
                                    <span>:</span>
                                    <span>SS001</span>
                                </div>
                                <div className="detail-sku">
                                    <span>Category</span>
                                    <span>:</span>
                                    <span>Sofas</span>
                                </div>
                                <div className="detail-sku">
                                    <span>Tags</span>
                                    <span>:</span>
                                    <span>Sofa, Chair, Home, Shop</span>
                                </div>
                                <div className="detail-sku">
                                    <span>Share</span>
                                    <span>:</span>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-square-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h2 className="section-heading__title">Related</h2>
                    </div>
                    <div className="section-body">
                        <div className="product-list">
                            {
                                relatedProduct.data?.map((item: IProduct, index: number) => {

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
                                                    <span className="product-price__new">{item?.price - (item?.price * (item.discount / 100))}đ</span>
                                                    <span className="product-price__old">{item?.price}đ</span>
                                                </div>
                                            </div>
                                            <div className="product-actions">
                                                <Link to={`/products/${item._id}`} className="product__linkdetail">Quick View</Link>
                                                <button className="btn product-action__addtocart">Add To Cart</button>
                                                <div className="product-actions-more">
                                                    <i className="fa-solid fa-share-nodes"></i><span className="product-action__share">Share</span>
                                                    <i className="fa-solid fa-arrow-right-arrow-left"></i><span className="product-action__compare">Compare</span>
                                                    <i className="fa-regular fa-heart"></i><span className="product-action__like">Like</span>
                                                </div>
                                            </div>
                                        </div>
                                    )


                                })
                            }


                        </div>

                    </div>
                    <hr className="product-hr"></hr>
                </div>
            </section >
        </>


    )
}

export default Detail
