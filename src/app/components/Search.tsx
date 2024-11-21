import { Input } from "@/components/ui/input"


interface SearchProps {
  placeholder?: string,
  className?: string,
  onSearch: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ placeholder, onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }
  return (
    <div className="w-full mb-4">
      <Input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search 