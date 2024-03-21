import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full py-12 flex flex-col items-center bg-[#101010]">
            <div className="w-1/3 flex justify-center">
                <Image
                    width={207}
                    height={46}
                    objectFit="cover"
                    // layout="fill"
                    alt="Zambo Classic Background"
                    src="/images/zambo/logo.png"
                />
            </div>
            <p className="sub text-sm mt-6">Todos os direitos reservdos - ZamboFlix 2024</p>
            <p className="text-zinc-500 text-xs">Design e desenvolvimento - <strong>Rafael Bezerra</strong></p>
        </footer>
    )
}