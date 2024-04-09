import React from 'react'

const service = () => {
    return (
        <div>
            <section className="service">
                <div className="container-fluidd">
                    <div className="service-list">
                        <div className="service-item">
                            <img src="../src/img/trophy 1.svg" className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">High Quality</h4>
                                <p className="service__description">Crafted from top materials</p>
                            </div>
                        </div>
                        {/* <!--End service-item--> */}
                        <div className="service-item">
                            <img src="../src/img/guarantee.svg" className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Warranty Protection</h4>
                                <p className="service__description">Over 2 years</p>
                            </div>
                        </div>
                        {/* <!--End service-item--> */}
                        <div className="service-item">
                            <img src="../src/img/shipping.svg" className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">Free Shipping</h4>
                                <p className="service__description">Order over 150 $</p>
                            </div>
                        </div>
                        {/* <!--End service-item--> */}
                        <div className="service-item">
                            <img src="../src/img/customer-support.svg" className="service__image" />
                            <div className="service-info">
                                <h4 className="service__name">24 / 7 Support</h4>
                                <p className="service__description">Dedicated support</p>
                            </div>
                        </div>
                        {/* <!--End service-item--> */}
                    </div>
                </div>
            </section>
            {/* <!--End .services--> */}
        </div>
    )
}

export default service
