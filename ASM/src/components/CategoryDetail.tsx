import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import News from './news';
const CategoryDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ['CATEGORY_DELTAIL', id],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/api/v1/categorys/${id}`)
            return data
        }
    });
    if (isLoading) return <p>Loading...</p>
    return (
        <div>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h1 className="section-heading__titel">Danh mục: {data.category.name}</h1>
                    </div>

                </div>
                <News data={data.products} />
            </section >
        </div>
    )
}

export default CategoryDetail
