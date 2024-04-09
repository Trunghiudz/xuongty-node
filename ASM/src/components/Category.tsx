
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
const categorys = () => {
    const { data: categories } = useQuery({
        queryKey: ['CATEGORY_LIST'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:3000/api/v1/categorys")
            return data
        }
    })

    return (
        <div>
            <section className="news">
                <div className="container">
                    <div className="section-heading">
                        <h1 className="section-heading__titel">Danh mục sản phẩm</h1>
                    </div>
                    <div>
                        {categories?.map((category: { _id?: number; name: string }) => {
                            return (
                                <div key={category?._id}>
                                    <h3><Link to={`/categorys/${category?._id}`}>{category?.name}</Link></h3>
                                </div>
                            )

                        })}
                    </div>
                </div>

            </section >

        </div >

    )
}

export default categorys
