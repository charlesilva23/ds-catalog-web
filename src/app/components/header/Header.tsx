import Link from "next/link";


export default function Header() {
    return (
        <div>
            <nav className="bg-brand-blue w-full flex flex-row h-20 text-white items-center">
                <div className="px-8 text-2xl">
                    <label htmlFor="DS-Catalog">DS Catalog</label>
                </div>
                <div className="flex flex-grow absolute justify-center gap-20 left-0 right-0">
                    <Link rel="stylesheet" href="/">HOME</Link>
                    <Link rel="stylesheet" href="/catalogo">CATÁLOGO</Link>
                    <Link rel="stylesheet" href="/admin">ADMIN</Link>
                </div>
            </nav>
        </div>
    )
}