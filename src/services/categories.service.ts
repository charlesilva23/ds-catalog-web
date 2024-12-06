import baseURL from "@/utils/baseURL"
import { ICategoriesResponseDTO } from "@/utils/categories"
import { IProductsResponseDTO } from "@/utils/products"
import axios from "axios"


const base = "categories"

export const getCategories = async () => {
  const response = await axios.get<ICategoriesResponseDTO>(`${baseURL}/${base}`)
  return response.data
}

export const filterByCategories = async (
  categoryId: number | null,
  page: number = 0,
  size: number = 8
) => {
  const url = categoryId 
    ? `${baseURL}/products?categoryId=${categoryId}&page=${page}&size=${size}`
    : `${baseURL}/products?page=${page}&size=${size}`

  const response = await axios.get<IProductsResponseDTO>(url)
  return response.data
}
