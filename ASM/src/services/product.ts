import instance from "../configs/axios";
import { IProduct } from "../interface/Product";

export const getAllProducts = async () => {
    try {
        const response = await instance.get(`/products`)
        return response.data
    } catch (error) {
        console.log(error)
    }
    []
}
export const getProductById = async (_id?: number | string) => {
    try {
        const response = await instance.get(`/products/${_id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteProduct = async (_id?: number | string) => {
    try {
        const response = await instance.delete(`products/${_id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const response = await instance.post(`/products/`, product)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const updateProduct = async (product: IProduct) => {
    try {
        const response = await instance.put(`/products/${product._id}`, product)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
