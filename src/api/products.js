import { instance } from "./index"
export const getProducts = async ({limit,start}) =>{
    const res = await instance.get(`/products?populate=*&pagination[start]=${start}&pagination[limit]=${limit}`);

    return res.data;
}