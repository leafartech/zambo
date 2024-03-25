import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../button";
import Svg from "./svg";

interface classicTemplateProps {
    children: ReactNode
    subHeadline: string
    buttonText: string
}

function classic_template({ buttonText, children, subHeadline }: classicTemplateProps) {
    return (
        <header className="sm:h-screen w-full flex items-center justify-center sm:bg-transparent bg-grad-2 pb-12">
            {/* <iframe className="rounded-xl sm:w-[560px] sm:h-[315px] w-full h-96" src="https://www.youtube.com/embed/EioQcmf5GdI?si=zx6Hvf0OY0nqHnnH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

            <div className="w-full max-w-6xl sm:grid sm:grid-cols-5 sm:gap-12 flex flex-col sm:px-0 px-4 sm:pt-0 pt-12">
                <div className="flex flex-col sm:items-start items-center sm:text-left text-center gap-4 col-span-2">
                    <div className="w-40">
                        <Image
                            src="/images/metodo/logo.webp"
                            width={518}
                            height={192}
                            alt="Logo Metodo Zamboni"
                        />
                    </div>
                    <p className="rounded-full px-4 py-1 bg-[#fd5f00] text-white text-[10px]">CRONOGRAMA DE 12 SEMANAS</p>
                    <h1 className="text-white text-3xl sm:text-4xl font-semibold">{children}</h1>
                    <p className="text-zinc-200">{subHeadline}</p>
                    <iframe className="rounded-xl sm:hidden block sm:w-full sm:h-full w-full h-48" src="https://www.youtube.com/embed/EioQcmf5GdI?si=zx6Hvf0OY0nqHnnH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <Button.terciary_button
                        href="#buy"
                    >Quero ser aprovado</Button.terciary_button>
                    <div className="w-full flex flex-col items-center gap-2">
                        <p className="text-xs text-white">De <span className="text-red-600">R$ 297,00</span> por apenas 12x de R$ 9,68 ou R$ 97 à vista.</p>
                        <Svg />
                    </div>
                </div>
                <div className="col-span-3 sm:flex sm:items-center hidden">
                    <iframe className="rounded-xl sm:w-full sm:h-96 w-full h-48" src="https://www.youtube.com/embed/EioQcmf5GdI?si=zx6Hvf0OY0nqHnnH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </header>
    )
}

export const Header = {
    classic_template
}