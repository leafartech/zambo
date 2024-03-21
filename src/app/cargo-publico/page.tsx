import BigList from "@/components/BigList";
import CircleSection from "@/components/CircleSection";
import MySwiper from "@/components/MySwiper";
import Testmonials from "@/components/MySwiper/testmonials";
import { Button } from "@/components/button";
import Card from "@/components/card";
import Dropdown from "@/components/dropdown";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import Heroflex from "@/components/heroflex";
import HeroflexVideo from "@/components/heroflex-video";
import Line from "@/components/line";
import Payment from "@/components/payment";
import Section from "@/components/section";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <Header.classic_template
                buttonText="Começe agora"
                subHeadline="Construa a base que você precisa para ser aprovado em provas de concurso público."
            >
                O jeito mais simples de você <span className="text-orange">concluir a faculdade</span> preparado para conquistar seu tão sonhado <span className="text-orange">cargo público</span>.
            </Header.classic_template>
            <main className="bg-[#010101]">
                <Line />
                <Section
                    classNameS="img-back"
                    className="sm:py-24 py-12"
                >
                    <div className="relative flex flex-col sm:gap-32">
                        <HeroflexVideo>
                            <div className="flex flex-col gap-8">
                                <h2 className="title"><span className="text-orange">Estudar direito</span> é diferente de <span className="text-orange">aprender direito</span></h2>

                                <div className="flex flex-col gap-4">
                                    <p className="sub">A verdade é que hoje temos milhares de estudantes formados em Direito com o sentimento de que não aprenderam nada durante a faculdade.</p>
                                    <p className="sub">Provavelmente você mesmo já teve a sensação que não está absorvendo os conteúdos jurídicos como deveria.</p>
                                    <p className="sub">Isso acontece por vários fatores: o ensino é falho, muitos professores não tem uma boa didática para passar o conteúdo, os materiais disponibilizados são muito rasos.</p>
                                    <p className="sub">A grande questão é: o que você vai decidir fazer sabendo que isso é uma realidade?</p>
                                    <p className="sub">Você vai ignorar e perder 5 anos da sua vida investindo seu tempo e recursos dentro de uma faculdade e depois perceber que não tem base para enfrentar uma prova…</p>
                                    <p className="sub">… ou buscar construir agora uma base de estudos forte para conquistar o concurso público dos seus sonhos?</p>
                                    <p className="sub">Se você decidir ficar com a segunda opção, chegou a hora de conhecer a Zamboflix.</p>
                                </div>
                            </div>
                        </HeroflexVideo>
                        <Heroflex
                            alt="Mockup das Aulas"
                            height={576}
                            width={635}
                            imagePath="bg2"
                            reverse={true}
                        >
                            <div className="flex flex-col gap-8">
                                <h2 className="title">A melhor forma de você <span className="text-orange">ganhar tempo</span> nos estudos</h2>
                                <div className="flex flex-col gap-4">
                                    <p className="sub">As aulas são separadas por temas dentro de cada disciplina.</p>
                                    <p className="sub">Desta maneira você pode estudar de forma direta o conteúdo que você quiser.</p>
                                    <p className="sub">Ou seja, você não perde tempo procurando o que precisa.</p>
                                    <p className="sub">Caso você não queira estudar todos os assuntos de uma disciplina, basta ir direto no tema que deseja.</p>
                                </div>
                            </div>
                        </Heroflex>
                        <Heroflex
                            alt="Vídeo explicativo"
                            height={532}
                            width={816}
                            imagePath="bg3"

                        >
                            <div className="flex flex-col gap-8 z-50 sm:bm-0 mb-12">
                                <h2 className="title">Uma <span className="text-orange">Plataforma Multidisciplinar</span> de estudos Jurídicos</h2>

                                <div className="flex flex-col gap-4">
                                    <p className="sub">Dentro da Zamboflix você vai contar com diversos professores didáticos e de vários ramos do Direito.</p>
                                    <p className="sub">De maneira simples você vai aprender e se aprofundar nos conteúdos jurídicos de extrema importância para provas de concursos públicos.</p>
                                    <p className="sub">É o melhor lugar para você estar, independente de qual período esteja, pois você pode direcionar sua energia para conteúdos que tem visto hoje na Faculdade.</p>
                                    <p className="sub">As aulas são separadas por temas dentro de cada disciplina. Dessa maneira, você não perde tempo procurando o que precisa.</p>
                                    <p className="sub">Caso você não queira estudar todos os assuntos de uma disciplina, basta ir direto no tema que deseja.</p>
                                </div>

                                <Button.classic_button
                                    href="#buy"
                                >Eu quero fazer parte</Button.classic_button>
                            </div>
                        </Heroflex>
                        <Heroflex
                            alt="Mockup da plataforma"
                            height={516}
                            width={640}
                            imagePath="bg4"
                            reverse={true}
                        >
                            <div className="flex flex-col gap-8">
                                <h2 className="title"><span className="text-orange">Completa, dinâmica e pronta</span> para você absorver de verdade cada conteúdo estudado.</h2>

                                <ul className="flex flex-col gap-5">
                                    <li className="relative sm:text-xl flex gap-3 ps-12 items-center text-white font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 2.5L2.5 8.75L15 15L27.5 8.75L15 2.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.5 21.25L15 27.5L27.5 21.25" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" stroke-linejoin="round"></path><path d="M2.5 15L15 21.25L27.5 15" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span>+1.000 AULAS DIDÁTICAS GRAVADAS</span>
                                    </li>
                                    <li className="relative sm:text-xl flex gap-3 ps-12 items-center text-white font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12.5 10L20 15L12.5 20V10Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span>+400 MATERIAIS COMPLEMENTARES ESTRATÉGICOS PARA RETER DE VERDADE OS CONTEÚDO</span>
                                    </li>
                                    <li className="relative sm:text-xl flex gap-3 ps-12 items-center text-white font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M7.5 17.5L9.3125 13.875C9.52121 13.4608 9.84101 13.1129 10.2362 12.87C10.6313 12.6272 11.0862 12.4991 11.55 12.5H25M25 12.5C25.3819 12.4993 25.7589 12.5862 26.102 12.7539C26.4452 12.9215 26.7453 13.1656 26.9795 13.4673C27.2136 13.7691 27.3755 14.1204 27.4527 14.4944C27.53 14.8685 27.5205 15.2552 27.425 15.625L25.4875 23.125C25.3488 23.6624 25.0351 24.1383 24.5961 24.4778C24.157 24.8172 23.6175 25.001 23.0625 25H5C4.33696 25 3.70107 24.7366 3.23223 24.2678C2.76339 23.7989 2.5 23.163 2.5 22.5V6.25C2.5 4.875 3.625 3.75 5 3.75H9.9125C10.3243 3.75213 10.7291 3.85594 11.0911 4.0522C11.4531 4.24846 11.761 4.5311 11.9875 4.875L13.0125 6.375C13.239 6.7189 13.5469 7.00154 13.9089 7.1978C14.2709 7.39406 14.6757 7.49787 15.0875 7.5H22.5C23.163 7.5 23.7989 7.76339 24.2678 8.23223C24.7366 8.70107 25 9.33696 25 10V12.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span>+ 120 MÓDULOS</span>
                                    </li>
                                    <li className="relative sm:text-xl flex gap-3 ps-12 items-center text-white font-semibold">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M27.5 12.5V20M27.5 12.5L15 6.25L2.5 12.5L15 18.75L27.5 12.5Z" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.5 15V21.25C11.25 25 18.75 25 22.5 21.25V15" stroke="#FF941C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                        <span>+ 50 CURSOS</span>
                                    </li>
                                </ul>

                                <Button.classic_button
                                    href="#buy"
                                >Eu quero fazer parte</Button.classic_button>
                            </div>
                        </Heroflex>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-6"
                >
                    <div className="flex flex-col items-center gap-6 sm:gap-12">
                        <div className="flex flex-col gap-2 max-w-2xl text-center">
                            <h2 className="title">Veja o que você vai <span className="text-orange">aprender</span></h2>
                            <p className="sub">Você decide o que quer aprender. Nós montamos uma trilha de estudos em várias áreas do direito para você:</p>
                        </div>
                        <BigList />
                        <div className="flex flex-col items-center gap-8 max-w-xl text-center">
                            <p className="sub">Além de todas essas áreas, você vai sempre ter acesso a novos conteúdos, materiais estratégicos e professores didáticos.</p>
                            <Button.classic_button
                                href="#buy"
                            >Eu quero fazer parte</Button.classic_button>
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="sm:grid sm:grid-cols-3 flex flex-col items-center w-full">
                        <div className="flex flex-col gap-6 max-w-2xl text-left col-span-1">
                            <h2 className="title">Seus <span className="text-orange">professores</span> especialistas</h2>
                            <p className="sub">Tenha acesso a professores de alto nível para te ajudar a alcançar seus objetivos em sua carreira jurídica.</p>
                        </div>
                        <div className="col-span-2 h-96 overflow-hidden w-full">
                            <MySwiper />
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="w-full flex flex-col items-center gap-4">
                        <h2 className="title">Você ainda vai <span className="text-orange">ganhar</span></h2>
                        <div className="w-full mt-4 sm:mt-16">
                            <CircleSection />
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-32 py-6"
                >
                    <div className="max-w-full flex flex-col gap-0">
                        <div className="flex flex-col sm:items-center gap-2 max-xl">
                            <h2 className="title">Tem dúvida se realmente <span className="text-orange">vale a pena</span>?</h2>
                            <p className="sub">Veja o que nossos alunos dizem</p>
                        </div>
                        <div className="w-full overflow-hidden">
                            <Testmonials />
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12 px-0"
                >
                    <Payment />
                </Section>
                <Section
                    className="sm:py-24 py-12"
                    classNameS="bg-[#101010] border-y border-zinc-600"
                >
                    <div className="text-center flex flex-col gap-4 max-w-xl">
                        <h2 className="title">Ou você gosta, ou seu <span className="text-orange">dinheiro de volta!</span></h2>
                        <p className="sub">Você tem 7 dias para assistir qualquer aula da Zamboflix e avaliar se é para você. Caso decida não continuar, basta entrar em contato dentro dos 7 dias e você terá 100% do seu dinheiro devolvido sem burocracia.</p>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="flex flex-col gap-8">
                        <h2 className="title text-center">Virei aluno da <span className="text-orange">ZamboFlix</span>, e agora?</h2>
                        <div className="flex gap-12 sm:flex-nowrap flex-wrap">
                            <Card
                                number="1"
                                title="Confirmação de inscrição"
                                text="Assim que for confirmado o seu pagamento no checkout, seu acesso à plataforma online será liberado."
                            />
                            <Card
                                number="2"
                                title="Instruções de acesso"
                                text="Os seus dados de acesso à plataforma (login e senha) chegarão no e-mail que você cadastrou no checkout."
                            />
                            <Card
                                number="3"
                                title="Acessando a ZamboFlix"
                                text="Utilize seu login e senha para acessar a plataforma e comece hoje mesmo a seguir seus objetivos."
                            />
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="w-full flex flex-col items-center gap-8">
                        <h2 className="title text-center">Perguntas <span className="text-orange">Frequentes</span></h2>
                        <div className="flex flex-col gap-4 w-full max-w-2xl">
                            <Dropdown
                                title="Ao comprar, quando posso começar a estudar?"
                            >
                                <p className="sub">Para cartão de crédito, débito e pix, você poderá começar imediatamente. Para compras em boleto bancário, damos um prazo de 2 dias úteis para compensar.</p>
                            </Dropdown>
                            <Dropdown
                                title="Como receberei meu acesso?"
                            >
                                <p className="sub">Após o pagamento você receberá um e-mail com o link da plataforma, login e senha para acessar as aulas.</p>
                            </Dropdown>
                            <Dropdown
                                title="Terei quanto tempo de acesso?"
                            >
                                <p className="sub">Um ano. Sua assinatura será renovada somente após 12 meses.</p>
                            </Dropdown>
                            <Dropdown
                                title="Qual o e-mail de suporte?"
                            >
                                <p className="sub">Caso esteja com qualquer outra dúvida, envie um e-mail para suporte@alexandrezamboni.com.br.</p>
                            </Dropdown>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div >
    )
}