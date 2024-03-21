import Image from "next/image"
import { ReactNode } from "react"

interface heroflexProps {
    children: ReactNode
    imgClassName?: string
}

export default function HeroflexVideo({ children, imgClassName }: heroflexProps) {
    return (
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center">
            <div className="w-full">
                <iframe className="rounded-xl sm:w-[560px] sm:h-[315px] w-full h-96" src="https://www.youtube.com/embed/JEdnGmFtHXw?si=sdzmQnoIN9u-aRck" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            {children}
        </div>
    )
}