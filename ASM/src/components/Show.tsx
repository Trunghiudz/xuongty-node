import React from 'react'

const Show = () => {
    return (
        <section className="show">
            <div className="container">
                <div className="show-item">
                    <div className="show-showing">
                        <div className="show-filter">
                            <img src="../src/img/Group 57.svg" alt="" className="show__filter" />
                            <img src="../src/img/ci_grid-big-round.svg" alt="" className="show__dot" />
                            <img src="../src/img/bi_view-list.svg" alt="" className="show__square" />
                        </div>
                        <div className="show-results">
                            <p className="show__results">Showing 1-16 of 32 results</p>
                        </div>
                    </div>

                    <div className="show-box">
                        <div className="show-left">
                            <span className="show__titel">Show</span>
                            <div className="show__number">16</div>
                        </div>
                        <div className="show-right">
                            <span className="show__titel">Short by</span>
                            <div className="show__short">Default</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Show
