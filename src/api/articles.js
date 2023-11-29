import { instance } from "./index"
export const getArticles = async () =>{
    const res = await instance.get("/articles?populate=*");

    return res.data;
}