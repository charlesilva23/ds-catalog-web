
interface CardProps {
  variant: 'home' | 'catalog' | 'mdCard' | 'smCard' | 'wideCard'
  children: React.ReactNode,
  className?: string
}

const cardTypes: Record<CardProps['variant'], string> = {
  home: "w-10/12 h-full",
  catalog: "w-[20%] h-2/5",
  mdCard: "w-8/12 h-full",
  smCard: "w-5/12 h-full",
  wideCard: "w-10/12 h-1/3"
}

const Card = ({ variant, children, className }: CardProps) => {
  const cardClass = cardTypes[variant] || cardTypes['home']

  return (
    <div className={`${cardClass} ${className} border rounded-2xl shadow-1xl shadow-card flex flex-col`}>
      {children}
    </div>
  )
}

export default Card