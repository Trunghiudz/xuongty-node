import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Banner from '../components/banner'
import News from '../components/news'
import Shop from '../components/shop'
import Blog from '../components/blog'
import Service from '../components/service'
const homePage = () => {
    return (
        <>
            <Banner />
            <News featured={true} />
            <Shop />
            <Blog />
            <Service />

        </>
    )
}

export default homePage
