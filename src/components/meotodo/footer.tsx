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
                    src="/images/metodo/logo.webp"
                />
            </div>
            <p className="sub text-sm mt-6">Copyright © 2023 – Centro de Ensino Zamboni – CNPJ: 33.278.260/0001-82</p>
            <p className="text-zinc-500 text-xs max-w-2xl">Todos os Direitos Reservados</p>
            <p className="text-zinc-500 text-xs max-w-2xl text-center">Este site não faz parte do site do Facebook ou Facebook Inc.
                Além disso, este site NÃO é endossado pelo Facebook de forma alguma.
                FACEBOOK é uma marca comercial da FACEBOOK, Inc.</p>
        </footer>
    )
}