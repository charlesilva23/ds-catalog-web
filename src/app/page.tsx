import Card from "@/components/Cards"
import HomeButton from "@/components/HomeButton"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen py-10">
      <Card variant="home">
        <div className="text-5xl w-5/12 relative top-1/4 left-16">
          <label>Conheça o melhor catálogo de produtos</label>
        </div>
        <div className="absolute left-[40%] ml-10 mt-10">
          <Image src="/assets/Desenho.png" alt="desenho" width={648} height={480} />
        </div>
        <div className="relative w-1/3 top-1/4 left-16 py-10 text-brand-gray">
          <span>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</span>
        </div>
        <div className="mt-auto h-2/6 pl-14">
          <HomeButton />
        </div>
      </Card>
    </div>

  )
}
