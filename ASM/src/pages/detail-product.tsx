import React from 'react'
import Showdt from '../components/Showdt'
import Detail from '../components/Detail'
import Description from '../components/Description'
import News from '../components/news'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ProductDetail = () => {

    return (
        <>
            <Showdt />
            <Detail />
            <Description />

        </>
    )
}

export default ProductDetail
