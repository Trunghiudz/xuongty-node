
import useProductMutation from '../hooks/useProductMutation';
const Add = () => {
    const { form, onSubmit, isPending } = useProductMutation({ action: "CREATE" })
    return (
        <>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Thêm sản phẩm</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                </div>
                <section className="add-products">
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                            <input type="text" {...form.register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* {form.errors.name && errors.name.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập tên sản phẩm</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Ảnh</label>
                            <input type="text" {...form.register('image', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* {errors.img && errors.img.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần up ảnh</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Danh mục</label>
                            <input type="text"  {...form.register('category', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* {errors.pricenew && errors.pricenew.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập giá</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Số lượng hàng tồn kho</label>
                            <input type="text"  {...form.register('countInStock', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* {errors.pricenew && errors.pricenew.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập giá</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Giảm giá</label>
                            <input type="text"  {...form.register('discount', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* {errors.pricenew && errors.pricenew.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập giá</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Giá</label>
                            <input type="text"  {...form.register('price', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                            {/* {errors.priceold && errors.priceold.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập giá</div>)} */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Mô tả</label>
                            <textarea   {...form.register('description', { required: true })} className="form-control" style={{ width: '100%', height: '100px' }} defaultValue={""} />
                            {/* {errors.description && errors.description.type == 'required' && (<div id="emailHelp" className="form-text text-danger">Bạn cần nhập mô tả</div>)} */}
                        </div>
                        <button type="submit" className="btn btn-primary">{isPending ? "Creating..." : "Thêm Sản Phẩm"}</button>
                    </form>
                </section>



            </main>
        </>
    )
}

export default Add

