"use client"

import Link from "next/link"
import { useState } from "react";

export const Header = () => {
    
    const [currentPage, setCurrentPage] = useState<number>(1);

    return(
        <header className="flex justify-center items-center h-[50px]">
            <ul className="flex items-center h-full border-b-[1px] border-[#444]">
                <Link href="/cart" onClick={() => setCurrentPage(1)} className={`px-3 py-[11px] text-black border-b-4 ${currentPage === 1 ? 'border-black' : 'border-white'}`}>
                    <li>Sacola</li>
                </Link>
                <Link href="/cart" onClick={() => setCurrentPage(2)} className={`px-3 py-[11px] text-black border-b-4 ${currentPage === 2 ? 'border-black' : 'border-white'}`}>
                    <li>Pagamento</li>
                </Link>
                <Link href="/cart" onClick={() => setCurrentPage(3)} className={`px-3 py-[11px] text-black border-b-4 ${currentPage === 3 ? 'border-black' : 'border-white'}`}>
                    <li>Confirmação</li>
                </Link>
            </ul>
        </header>
    )
}