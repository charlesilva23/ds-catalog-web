'use client'

import { IProductsRecordDTO, IProductsResponseDTO } from "@/utils/products"
import { ICategoriesDTO } from "@/utils/categories"
import { useEffect, useMemo, useState } from "react"
import { getProducts } from "@/services/products.service"
import { getCategories } from "@/services/categories.service"
import Select from "../components/Select"
import Pagination from "../components/Pagination"
import ProductCard from "../components/ProductCard"

export default function Catalogo() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState<IProductsRecordDTO[]>([])
  const [categories, setCategories] = useState<ICategoriesDTO[]>([])
  const [search, setSearch] = useState('')
  const [pagination, setPagination] = useState<IProductsResponseDTO>({
    content: [],
    totalElements: 0,
    totalPages: 1,
    size: 8,
    number: 0,
    first: 1,
    last: 1,
    empty: true,
  });

  const productsFiltered = useMemo(() => {
    const lowerSearch = search.toLowerCase()
    return products.filter((product) => product.name.toLowerCase().includes(lowerSearch))
  }, [search, products])


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts({ page: currentPage, size: pagination.size })
        setProducts(response.content)
        setPagination(response)
      } catch (error) {
        console.error('Erro:', error)
      }
    }

    const fetchCategories = async () => {
      try {
        const response = await getCategories()
        console.log(response.content)
        setCategories(response.content)
      } catch (error) {
        console.error("erro:", error)
      }
    }

    fetchProducts()
    fetchCategories()
  }, [currentPage, pagination.size])




  return (
    <div className="flex justify-center h-screen w-screen">
      <div className="flex flex-wrap w-10/12 justify-center gap-6">
        <div className="p-8 w-11/12">
          <label htmlFor="catalogo" className="text-2xl">Catálogo de produtos</label>
          <div className="flex mt-4 w-full h-16 shadow-card border rounded-md items-center gap-6">
            <input type="text" placeholder="Nome do produto" className="ml-4 w-5/12 border-b-2 font-thin" onChange={(e) => setSearch(e.target.value)} />
            <Select
              description="Selecione uma categoria"
              className="w-1/3 h-9 bg-white text-brand-gray border-b-2 font-thin"
            >
              {categories?.map((categorie) => (
                <option value={categorie.id} key={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </Select>
            <button className="p-1 h-10 px-8 border border-brand-gray rounded-xl text-brand-gray text-sm text-nowrap">LIMPAR FILTRO</button>
          </div>
        </div>
        {productsFiltered?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={pagination.totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
