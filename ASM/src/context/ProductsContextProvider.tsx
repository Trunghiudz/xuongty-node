import axios from 'axios';
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { IProduct } from '../interface/Product';
type Props = {
    children: React.ReactNode,
}
export const ProductContext = createContext({} as any)
const ProductsContextProvider = ({ children }: Props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                await axios.get('http://localhost:3000/products')
                    .then(res => setProducts(res.data))
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])

    const addProduct = async (product: IProduct) => {
        try {
            await axios.post(`http://localhost:3000/products`, product)
                .then(res => setProducts([...products, res.data]))
            alert('Thêm sản phẩm thành công')
        } catch (error) {
            console.log(error);

        }
    }

    const updateProduct = async (product: IProduct) => {
        try {
            await axios.put(`http://localhost:3000/products/${product.id}`, product)
            setProducts(products.map((item) => item.id == product.id ? product : item))
            alert('Cập nhập sản phẩm thành công')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <ProductContext.Provider value={{ products, setProducts, deleteProduct, addProduct, updateProduct }}>
                {children}
            </ProductContext.Provider>
        </div>
    )
}

export default ProductsContextProvider
