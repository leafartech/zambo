import Image from "next/image"
import { ReactNode } from "react"

interface heroflexProps {
    imagePath: string
    height: number
    width: number
    alt: string
    children: ReactNode
    imgClassName?: string
    reverse?: boolean
}

export default function Heroflex({ children, height, imagePath, width, alt, imgClassName, reverse }: heroflexProps) {
    return (
        <div className={`sm:grid sm:grid-cols-2 sm:gap-0 gap-12 flex ${reverse ? 'flex-col-reverse' : 'flex-col'}`}>
            {!reverse && (
                <div className="w-full">
                    <Image
                        src={`/images/zambo/${imagePath}.png`}
                        alt={alt}
                        width={width}
                        height={height}
                        layout="responsive"
                        className={`w-full sm:max-w-[550px] ${imgClassName}`}
                    />
                </div>
            )}
            {children}
            {reverse && (
                <div className="w-full">
                    <Image
                        src={`/images/zambo/${imagePath}.png`}
                        alt={alt}
                        width={width}
                        height={height}
                        layout="responsive"
                        className={`w-full sm:max-w-[550px] ${imgClassName}`}
                    />
                </div>
            )}
        </div>
    )
}