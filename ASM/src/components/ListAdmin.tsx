
import { Link } from 'react-router-dom'
import useProductQuery from '../hooks/useProductQuery';
import { IProduct } from '../interface/Product';
import useProductMutation from '../hooks/useProductMutation';
import HeaderAdmin from './HeaderAdmin';
import SidebarMenu from './SidebarMenu';

const ListAdmin = () => {
    const { mutate } = useProductMutation({ action: "DELETE" })
    const { data: products, isLoading, isError, error } = useProductQuery();
    if (isLoading) { return <h2>Loading...</h2> };
    if (isError) { return <div>{error.message}</div> };
    return (
        // <div className="table-responsive">
        //     <h1>Danh sách sản phẩm</h1><br />
        //     <table className="table table-striped table-sm">
        //         <thead>
        //             <tr>
        //                 <th scope="col">STT</th>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Image</th>
        //                 <th scope="col">Discount</th>
        //                 <th scope="col">Price</th>

        //                 <th scope="col">Quantity</th>
        //                 <th scope="col">Description</th>
        //                 <th scope="col">Thao tác</th>
        //             </tr>
        //         </thead>
        //         <tbody className="table-group-divider">
        //             {
        //                 products?.map((item: IProduct, i: number) => (

        //                     <tr key={i}>
        //                         <th scope="row">{item?._id}</th>
        //                         <td>{item?.name}</td>
        //                         <td>
        //                             <img width='50px' src={item?.image} alt="" />
        //                         </td>
        //                         <td>{item?.discount}</td>
        //                         <td>{item?.price}</td>
        //                         <td>{item?.quantity}</td>
        //                         <td>{item?.description}</td>
        //                         <td>
        //                             <Link to={`/admin/update/${item._id}`} className='btn btn-warning'>Edit</Link>
        //                             <button className='btn btn-danger' onClick={() => mutate(item)}>Delete</button>
        //                         </td>
        //                     </tr>
        //                 ))
        //             }

        //         </tbody>
        //     </table>
        //     <Link to="/admin/add" className="btn btn-primary">Add Product</Link>
        // </div>
        <>


            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Danh sách sản phẩm</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to="/admin/add" style={{ textDecoration: 'none', color: 'inherit' }}>Thêm sản phẩm</Link></button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                </div>



                <h2>Section title</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Discount</th>
                                <th scope="col">Price</th>
                                <th scope="col">Description</th>
                                <th scope="col">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((item: IProduct, i: number) => (
                                    <tr key={i}>
                                        <td>{item?._id}</td>
                                        <td>{item?.name}</td>
                                        <td>
                                            <img width='50px' src={item?.image} alt="" />
                                        </td>
                                        <td>{item?.discount}</td>
                                        <td>{item?.price}</td>
                                        <td>{item?.description}</td>
                                        <td>
                                            <Link to={`/admin/update/${item._id}`} className='btn btn-warning'>Edit</Link>
                                            <button className='btn btn-danger' onClick={() => mutate(item)} >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }




                        </tbody>
                    </table>
                </div>
            </main>

        </>

    )
}

export default ListAdmin
