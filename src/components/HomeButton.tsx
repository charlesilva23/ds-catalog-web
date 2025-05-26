import Image from "next/image";

interface HomeButtonProps {
  label?: string;
  className?: string;
}

const HomeButton = ({}: HomeButtonProps) => {
  return (
    <div className="">
      <button className="bg-brand-darkBlue h-14 w-[30%] border rounded-lg">
        <Image
          src="/assets/arrow.svg"
          alt="arrow"
          width={10}
          height={20}
          className="absolute left-1/3 mt-4"
        />
        <div className="flex items-center justify-center bg-brand-blue text-white w-4/5 h-full rounded-tl-lg rounded-bl-lg">
          <label htmlFor="buscar">INICIE AGORA A SUA BUSCA</label>
        </div>
      </button>
    </div>
  );
};

export default HomeButton;
