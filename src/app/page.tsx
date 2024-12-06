import Card from "@/components/Cards"
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
        <div className="mt-auto flex relative pb-24 left-16">
          <button className="bg-brand-darkBlue h-14 w-[30%] border rounded-lg">
            <Image src="/assets/arrow.svg" alt="arrow" width={10} height={20} className="absolute left-1/4 mt-4 ml-5" />
            <div className="flex items-center justify-center bg-brand-blue text-white w-4/5 h-full rounded-tl-lg rounded-bl-lg">
              <label htmlFor="buscar">INICIE AGORA A SUA BUSCA</label>
            </div>
          </button>
        </div>
      </Card>
    </div>

  )
}
