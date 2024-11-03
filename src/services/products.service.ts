import baseUrl from "@/utils/baseURL"
import { IProductsRecordDTO } from "@/utils/products"
import axios from "axios"

const base = "products";

export const getProducts = async () => {
  return await axios.get<IProductsRecordDTO[]>(`${baseUrl}/${base}`)
}