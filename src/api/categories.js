import { instance } from "./index"
export const getCategories = async () =>{
    const res = await instance.get("/categories?populate=*");

    return res.data;
}