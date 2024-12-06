import baseURL from "@/utils/baseURL"
import { IProductsRecordDTO, IProductsResponseDTO } from "@/utils/products"
import axios from "axios"

const base = "products"

interface GetProductsParams {
  page: number, 
  size: number, 
  search: string 
  categoryId: number
}

export const getProducts = async ({ 
  page, 
  size, 
  search,
  categoryId 
}: GetProductsParams
) => {
  const url = `${baseURL}/${base}?page=${page}&size=${size}&categoryId=${categoryId}&search=${search}`

  const response = await axios.get<IProductsResponseDTO>(url)
  return response.data
}


export const getProductById = async (id: number | null) => {
  const url = `${baseURL}/${base}/${id}`

  const response = await axios.get<IProductsRecordDTO>(url)
  return response.data  
} 