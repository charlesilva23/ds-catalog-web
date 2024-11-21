'use client'

import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav className="bg-brand-blue flex flex-row h-20 w-full text-white items-center">
                <div className="px-8 text-2xl">
                    <Link href='/'>
                        <span>DS Catalog</span>
                    </Link>
                </div>
                <div className="flex flex-grow justify-center">
                    <div className="w-5/12 flex gap-20">
                        <Link href="/">HOME</Link>
                        <Link href="/catalogo">CATÁLOGO</Link>
                        <Link href="/admin">ADMIN</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
