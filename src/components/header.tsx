import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "./button";

interface classicTemplateProps {
    children: ReactNode
    subHeadline: string
    buttonText: string
}

function classic_template({ buttonText, children, subHeadline }: classicTemplateProps) {
    return (
        <header className="sm:h-screen w-full flex items-center justify-center sm:bg-transparent bg-[#101010] sm:pt-0 pt-12 pb-12">
            <Image
                width={1920}
                height={800}
                objectFit="fill"
                layout="respoonsive"
                alt="Zambo Classic Background"
                src="/images/zambo/bg.png"
                className="absolute  -z-10 bottom-0"
            />
            <div className="w-full max-w-6xl sm:grid sm:grid-cols-2 flex flex-col sm:px-0 px-4 sm:pt-0 pt-12">
                <div className="sm:max-w-lg flex sm:items-start items-center flex-col gap-6 text-white sm:text-left text-center">
                    <div className="sm:w-[324px]">
                        <Image
                            width={207}
                            height={46}
                            objectFit="cover"
                            // layout="fill"
                            alt="Zambo Classic Background"
                            src="/images/zambo/logo.png"
                        />
                    </div>
                    <h1 className="font-bold sm:text-4xl text-2xl">{children}</h1>
                    <p className="sm:text-lg">{subHeadline}</p>
                    <Button.classic_button
                        href="#buy"
                    >{buttonText}</Button.classic_button>
                    <p className="text-white opacity-60 w-full font-thin text-sm uppercase tracking-[.3em] flex sm:justify-start justify-center items-center gap-3">
                        <span>Continue navegando </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px] -translate-y-[0px] stroke-white" viewBox="0 0 12 11" fill="none"><path d="M1.97263 1.04806L1.96869 0.798086L1.93595 0.798602L1.90444 0.807534C1.59993 0.893859 1.19525 1.12924 0.953245 1.56445C0.704964 2.01095 0.651326 2.62481 0.978971 3.41432C1.60058 4.91219 3.05781 7.30486 4.82129 9.73604C5.10549 10.1279 5.59668 10.2992 6.04228 10.2976C6.484 10.296 6.96662 10.1221 7.20166 9.71401C7.32963 9.49181 7.86896 8.59226 8.51007 7.52293C8.73525 7.14733 8.973 6.75079 9.20989 6.35529C10.1149 4.84431 11.0166 3.33367 11.131 3.10666C11.209 2.95189 11.2459 2.74101 11.2497 2.52721C11.2535 2.30798 11.223 2.06051 11.1455 1.82218C10.9901 1.34418 10.6277 0.866348 9.95176 0.799277C9.38988 0.743523 7.38261 0.744067 5.5394 0.757515C4.61259 0.764278 3.71996 0.77442 3.05908 0.782871C2.72862 0.787096 2.45607 0.7909 2.26611 0.793647L2.04621 0.796896L1.98849 0.797778L1.97371 0.798008L1.96996 0.798066L1.96902 0.798081L1.96878 0.798085L1.97263 1.04806Z" strokeWidth="0.5" strokeLinecap="round"></path></svg>
                    </p>
                </div>
            </div>
        </header>
    )
}

export const Header = {
    classic_template
}