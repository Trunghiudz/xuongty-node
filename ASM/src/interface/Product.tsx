export interface IProduct {
    _id?: Number | String,
    name: string,
    category?: string,
    gallery?: string[],
    image: string,
    discount: number,
    price: number,
    quantity: number,
    description: string,
    countInStock: number,
    featured: Boolean
}