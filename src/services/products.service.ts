import baseUrl from "@/utils/baseURL"
import { IProductsResponseDTO } from "@/utils/products"
import axios from "axios"

const base = "products";

export const getProducts = async () => {
  const response = await axios.get<IProductsResponseDTO>(`${baseUrl}/${base}`)
  return response.data
}