import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../button";

export default function Payment() {
    return (
        <div className="sm:grid sm:grid-cols-2 flex flex-col w-full max-w-5xl">
            <div className="">
                <Image
                    src="/images/zambo/bg6.png"
                    alt="Imagem de mulher feliz"
                    width={747}
                    height={900}
                    className="rounded-t-3xl sm:rounded-none sm:rounded-l-3xl"
                />
            </div>
            <div className="bg-grad rounded-b-3xl sm:rounded-none sm:rounded-r-3xl flex flex-col justify-center sm:gap-8 gap-6 px-4 sm:px-12 sm:pt-0 pt-8 sm:pb-0 pb-6">
                <h2 className="text-[32px] leading-[1.1em] sm:text-[36px] text-white font-medium">O método que vai te colocar na lista de aprovados.</h2>
                <ul className="flex flex-col gap-4">
                    <li className="relative flex items-center sm:ps-12 ps-8">
                        <CheckCircleIcon className="text-[#61ce70] sm:h-10 sm:w-10 w-6 h-6 absolute left-0" />
                        <span className="text-white sm:text-xl">Comunidade</span>
                    </li>
                    <li className="relative flex items-center sm:ps-12 ps-8">
                        <CheckCircleIcon className="text-[#61ce70] sm:h-10 sm:w-10 w-6 h-6 absolute left-0" />
                        <span className="text-white sm:text-xl">Certificado de Conclusão</span>
                    </li>
                    <li className="relative flex items-center sm:ps-12 ps-8">
                        <CheckCircleIcon className="text-[#61ce70] sm:h-10 sm:w-10 w-6 h-6 absolute left-0" />
                        <span className="text-white sm:text-xl">Material Premium</span>
                    </li>
                    <li className="relative flex items-center sm:ps-12 ps-8">
                        <CheckCircleIcon className="text-[#61ce70] sm:h-10 sm:w-10 w-6 h-6 absolute left-0" />
                        <span className="text-white sm:text-xl">Suporte especializado</span>
                    </li>
                </ul>
                <div className="w-full flex flex-col gap-2 text-center">
                    <h4 className="text-2xl sm:text-4xl font-bold text-white">12 x de R$ 9,68</h4>
                    <p className="text-zinc-200">ou R$ 97,00 à vista</p>
                    <Button.terciary_button href="https://pay.hotmart.com/D83117419H?off=buyg3j23&checkoutMode=10&split=12&sck=pagina-zamboflix">Eu quero fazer parte</Button.terciary_button>
                    <div className="sm:w-full flex flex-col items-center gap-4 mt-4">
                        <div className="w-2/3">
                            <Image
                                src="/images/zambo/bg7.png"
                                alt="Métodos de pagamento"
                                width={410}
                                height={34}
                            />
                        </div>
                        <p className="text-zinc-300 text-center font-thin max-w-sm text-xs sm:text-sm">*Parcelamento com tarifa de 2.89% a.m via cartão de crédito. Compra segura. 7 (sete) dias de garantia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}