export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen py-10">
      <div className="w-10/12 h-[90%] border rounded-3xl shadow-1xl shadow-card flex flex-col">
        <div className="text-5xl w-5/12 relative top-1/4 left-16">
          <label>Conheça o melhor catálogo de produtos</label>
        </div>
        <div className="absolute left-[40%] ml-10 mt-20">
          <img src="/assets/Desenho.png" alt="desenho" width={648} height={480} />
        </div>
        <div className="relative w-1/3 top-1/4 left-16 py-10 text-brand-gray">
          <span>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</span>
        </div>
        <div className="mt-auto flex relative pb-24 left-16"> 
          <button className="bg-brand-darkBlue h-14 w-[30%] border rounded-lg">
          <img src="/assets/arrow.svg" alt="arrow" className="absolute left-1/4 mt-4 ml-5"/>
            <div className="flex items-center justify-center bg-brand-blue text-white w-4/5 h-full rounded-tl-lg rounded-bl-lg">
              <label htmlFor="buscar">INICIE AGORA A SUA BUSCA</label>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}