import React from 'react'
import { useParams } from 'react-router-dom';
import useProductQuery from '../hooks/useProductQuery';

const Show = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError } = useProductQuery(id);

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }
    return (
        <section className="show">
            <div className="container">
                <div className="show-item">
                    <div className="show-showing">
                        <div className="show-filter">
                            <div className="show-homeshop">
                                <div className="show-home">
                                    <a href="" className="show__home">Home</a>
                                    <img src="../../src/img/dashicons_arrow-up-alt2.svg" alt="" className="show__arrow" />
                                </div>
                                <div className="show-home">
                                    <a href="" className="show__home">ProductsDetail</a>
                                    <img src="../../src/img/dashicons_arrow-up-alt2.svg" alt="" className="show__arrow" />
                                </div>
                            </div>

                        </div>
                        <div className="show-results">
                            <p className="show__asgaard">{product.name}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Show
