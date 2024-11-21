import baseURL from "@/utils/baseURL";
import { IProductsResponseDTO } from "@/utils/products"
import axios from "axios"

const base = "products";

export const getProducts = async ({ page, size }: { page: number; size: number }) => {
  const response = await axios.get<IProductsResponseDTO>(`${baseURL}/${base}?page=${page}&size=${size}`)
  return response.data
}

