import Link from "next/link";
import { ReactNode } from "react";

interface classicTemplateProps {
    children: ReactNode
    href: string
}

function classic_button({ children, href }: classicTemplateProps) {
    return (
        <Link
            href={href}
            className="duration-300 transition hover:-translate-y-2 hover:text-white my-shadow uppercase bg-orange text-zinc-800 font-medium text-lg sm:text-xl w-full sm:w-96 rounded-md text-center py-5">
            {children}
        </Link>
    )
}
function secondary_button({ children, href }: classicTemplateProps) {
    return (
        <a
            href={href}
            className="duration-300 transition hover:-translate-y-2 text-white my-shadow-2 uppercase bg-[#0CB450] font-medium text-lg sm:text-xl w-full rounded-md text-center sm:py-5 py-3">
            {children}
        </a>
    )
}
function terciary_button({ children, href }: classicTemplateProps) {
    return (
        <a
            href={href}
            className="duration-300 transition hover:-translate-y-2 text-white uppercase bg-[#61ce70] font-medium text-lg sm:text-lg w-full rounded-3xl text-center sm:py-3 py-3 border-b-4 border-[#4d9457]">
            {children}
        </a>
    )
}

export const Button = {
    classic_button,
    secondary_button,
    terciary_button
}