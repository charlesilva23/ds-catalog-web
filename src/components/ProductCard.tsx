import { IProductsRecordDTO } from "@/utils/products"
import Card from "./Cards"
import Image from "next/image"
import Link from "next/link"


interface ProductCardProps {
  product: IProductsRecordDTO
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Card
    variant="catalog"
    key={product.id}
  >
    <Link href={`/products/${product.id}`}>
      <div className="w-full flex justify-center py-4">
        <Image
          src={product.imgUrl}
          alt={product.imgUrl}
          width={120}
          height={120}
        />
      </div>
      <hr />
      <div className="flex px-4 mt-4">
        <h1>{product.name}</h1>
      </div>
      <div className="flex items-start justify-start px-4">
        <span className="text-xs text-brand-gray w-5 mt-1">R$</span>
        <label className="text-3xl text-brand-blue">{product.price}</label>
      </div>
    </Link>
  </Card>
)

export default ProductCard