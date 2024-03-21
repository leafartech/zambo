import Image from "next/image";
import CircleSectionItem from "./circle-section-item";

export default function CircleSection() {
    return (
        <div className="w-full sm:h-[540px] relative sm:grid sm:grid-cols-4 grid-rows-1">
            <div className="col-span-1 flex flex-col sm:gap-0 gap-6 justify-between">
                <CircleSectionItem
                    title="Comunidade"
                    subtitle="Um ambiente exclusivo onde novos laços se formam e novas parcerias profissionais podem acontecer."
                    right={false}
                    className="sm:translate-x-20"
                />
                <CircleSectionItem
                    title="Trilhas de estudos"
                    subtitle="Aulas em sequência de acordo com o seu objetivo."
                    right={false}
                    className=""
                />
                <CircleSectionItem
                    title="Material premium"
                    subtitle="Fichas de questões comentadas e com gabarito."
                    right={false}
                    className="sm:translate-x-20"
                />
            </div>
            <div className="col-span-2 h-full sm:block hidden">
                <Image
                    src="/images/zambo/bg5.png"
                    alt="Círculo Zambo"
                    width={1024}
                    height={1024}
                    // className="absolute"
                    layout="responsive"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                </div> */}
                <div className="absolute w-full left-0 -bottom-32 flex justify-center">
                    <div className={`flex flex-col gap-6 text-center w-72`}>
                        <h4 className="text-white text-2xl font-semibold">Módulo bônus</h4>
                        <p className="text-orange-2">Com orientações práticas para quem vai fazer um TCC (Trabalho de Conclusão de Curso).</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex flex-col sm:gap-0 gap-6 justify-between">
                <CircleSectionItem
                    title="Certificados"
                    subtitle="Personalizado com carga horária do curso assistido (essencial para quem precisa de horas complementares)."
                    right={true}
                    className="sm:-translate-x-20"
                />
                <CircleSectionItem
                    title="Workshop"
                    subtitle="Você vai descobrir como tornar sua rotina de estudos mais produtiva."
                    right={true}
                />
                <CircleSectionItem
                    title="Acesso à equipe pedagógica"
                    subtitle="Todas as suas dúvidas serão tiradas com uma equipe preparada e dedicada"
                    right={true}
                    className="sm:-translate-x-20"
                />
            </div>
        </div>
    )
}