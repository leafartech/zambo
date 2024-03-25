import Heroflex from "@/components/meotodo/heroflex";
import { Header } from "@/components/meotodo/header";
import Section from "@/components/section";
import { Button } from "@/components/button";
import Item from "@/components/meotodo/item";
import { BookOpenIcon, PencilSquareIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import Testmonials from "@/components/meotodo/testmonials";
import Payment from "@/components/meotodo/payment";
import Image from "next/image";
import { CheckIcon, DevicePhoneMobileIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import Dropdown from "@/components/meotodo/dropdown";
import Footer from "@/components/meotodo/footer";

export default function Page() {
    return (
        <div>
            <Header.classic_template
                subHeadline="Tenha em mãos o cronograma de estudos que já aprovou milhares de alunos desde a sua criação."
                buttonText=""
            >
                O plano estratégico para você seguir e ser aprovado no XLI exame da OAB.
            </Header.classic_template>
            <main>
                <Section
                    className="sm:py-24 py-12"
                >
                    <Heroflex
                        imagePath="bg9"
                        width={640}
                        height={740}
                        reverse={true}
                        alt="Imagem do cronograma"
                        imgClassName="rounded-xl shadow-xl sm:ms-8"
                    >
                        <div className="flex flex-col justify-center gap-8 sm:me-8">
                            <h2 className="title-2">Estudar por um método tradicional não funciona!</h2>
                            <div className="flex flex-col gap-4">
                                <p className="sub-2">Uma coisa é certa: se você deseja ser aprovado na OAB, não deve seguir uma rotina de estudos qualquer.</p>
                                <p className="sub-2">Não adianta estudar todas as matérias, assistir o máximo de videoaulas e resolver questões aleatórias.</p>
                                <p className="sub-2">A forma mais inteligente de você garantir sua aprovação é aderir um método que siga a tendência de conteúdos e questões da banca FGV.</p>
                                <p className="sub-2">O Método Zamboni te entrega exatamente isso: um cronograma estratégico de estudos seguindo o padrão de provas que a FGV tem há anos.</p>
                            </div>
                        </div>
                    </Heroflex>
                </Section>
                <Section
                    classNameS="bg-zinc-100"
                    className="sm:py-24 py-12"
                >
                    <Heroflex
                        imagePath="bg10"
                        width={680}
                        height={550}
                        reverse={false}
                        alt="Imagem do cronograma"
                        imgClassName="rounded-xl shadow-xl sm:ms-8"
                    >
                        <div className="flex flex-col justify-center gap-8 sm:me-8">
                            <h2 className="title-2">Nunca foi tão simples manter a organização e disciplina nos estudos.</h2>
                            <div className="flex flex-col gap-4">
                                <p className="sub-2">Sabe quando você senta para estudar e fica perdido sem saber por onde começar?</p>
                                <p className="sub-2">Com o Método Zamboni você nunca mais vai passar por isso! Ele é baseado em um cronograma onde o seu tempo de estudos é direcionado estrategicamente para conteúdos e disciplinas que vão te levar à aprovação.</p>
                                <p className="sub-2">Ou seja, além de te fazer ganhar tempo nos estudos, ele vai te dar clareza do passo a passo que você deve seguir para ser aprovado.</p>
                            </div>
                            <Button.terciary_button
                                href="#buy"
                            >Quero ser aprovado na OAB</Button.terciary_button>
                        </div>
                    </Heroflex>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="flex flex-col items-center gap-20">
                        <h2 className="title-2">O que o Método Zamboni de 12 semanas vai te dar?</h2>
                        <div className="w-full max-w-6xl sm:grid sm:grid-cols-2 sm:grid-rows-2 flex flex-col gap-10">
                            <Item
                                Icon={BookOpenIcon}
                                title="Cronograma de estudos diário"
                                text="Você terá em mãos um roteiro detalhado que diz o que, como, por onde e quando você deve estudar os temas e disciplinas cobrados na 1ª fase da OAB durante 12 semanas.
                                "
                            />
                            <Item
                                Icon={VideoCameraIcon}
                                text="Não vai faltar questões com gabaritos para você testar seu rendimento e se preparar com empenho para o exame."
                                title="Questões com gabarito"
                            />
                            <Item
                                Icon={VideoCameraIcon}
                                title="Videoaulas complementares"
                                text="Você vai assistir videoaulas didáticas com os temas e disciplinas certeiros que cairão na prova."
                            />
                            <Item
                                Icon={PencilSquareIcon}
                                title="Simulado de autoavaliação"
                                text="Você vai aumentar sua confiança simulando a prova com as questões que seguem o mesmo padrão da OAB."
                            />
                        </div>
                    </div>
                </Section>
                <Section
                    classNameS="bg-zinc-100"
                    className="sm:py-24 py-12"
                >
                    <div className="max-w-full flex flex-col sm:gap-0 gap-4">
                        <div className="flex flex-col sm:items-center gap-2 max-xl">
                            <h2 className="title-2">Tem dúvida se realmente vale a pena?</h2>
                            <p className="sub-2">Veja o que nossos alunos dizem</p>
                        </div>
                        <div className="w-full overflow-hidden">
                            <Testmonials />
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:py-12 py-6"
                    id="buy"
                >
                    <Payment />
                </Section>
                <Section
                    classNameS="bg-zinc-100"
                    className="sm:py-24 py-12"
                >
                    <div className="bg-white flex items-center flex-col gap-4 text-center px-8 py-12 rounded-2xl w-full shadow-2xl">
                        <div className="w-[124px]">
                            <Image
                                src="/images/metodo/garantia.png"
                                alt="Garantia"
                                width={209}
                                height={209}
                            />
                        </div>
                        <div className="max-w-3xl flex flex-col gap-4">
                            <h2 className="text-3xl font-medium">Ou você gosta, ou seu dinheiro de volta!</h2>
                            <p className="text-zinc-600">Você tem 7 dias para ver todo o Método Zamboni por dentro, e avaliar se é para você. Caso decida não seguir o método validado por milhares de alunos, basta entrar em contato dentro dos 7 dias e você terá 100% do seu dinheiro devolvido sem burocracia.</p>
                        </div>
                    </div>
                </Section>
                <Section
                    className="sm:pt-12 pt-6"
                >
                    <Heroflex
                        alt="Alexandre Zamboni foto"
                        height={940}
                        imagePath="bg11"
                        width={767}
                        imgClassName=""
                        reverse={true}
                    >
                        <div className="flex flex-col justify-center gap-8">
                            <h2 className="title-2">Quem será o seu mentor?</h2>
                            <div className="flex flex-col gap-4">
                                <p className="sub-2">Prazer, Alexandre Zamboni!</p>
                                <p className="sub-2">Sou mestre em direito penal, servidor público, e hoje, professor de mais de 80 mil alunos.</p>
                                <p className="sub-2">Depois que fui aprovado na OAB cursando ainda o 9º período de faculdade, decidi construir um método de estudos a partir de uma profunda análise de todas as provas já realizadas pela OAB.</p>
                                <p className="sub-2">O Método Zamboni vem ajudando milhares de alunos a conquistarem a tão sonhada vermelhinha e está em constante melhoria para que você receba um material de estudos atualizado e produtivo.</p>
                            </div>
                        </div>
                    </Heroflex>
                </Section>
                <Section
                    classNameS="bg-zinc-100"
                    className="sm:py-24 py-12"
                >
                    <div className="flex flex-col gap-12 items-center">
                        <h2 className="title-2">Adquiri o Método Zamboni, e agora?</h2>
                        <ul className="flex gap-6 sm:flex-nowrap flex-wrap">
                            <Item
                                Icon={CheckIcon}
                                title="Confirmação de inscrição"
                                text="Assim que for confirmado o seu pagamento no checkout, seu acesso à plataforma online será liberado."
                            />
                            <Item
                                Icon={DevicePhoneMobileIcon}
                                title="Instruções de acesso"
                                text="Os seus dados de acesso à plataforma chegarão no WhatsApp que você cadastrou no checkout."
                            />
                            <Item
                                Icon={LockOpenIcon}
                                title="Acessando o Método"
                                text="Utilize seu login e senha para acessar a plataforma e comece hoje mesmo a seguir o cronograma de 12 semanas."
                            />
                        </ul>
                    </div>
                </Section>
                <Section
                    className="sm:py-24 py-12"
                >
                    <div className="flex flex-col items-center gap-8">
                        <h2 className="title-2">Perguntas frequentes</h2>
                        <div className="flex flex-col gap-2">
                            <Dropdown
                                title="Ao comprar, quando posso começar a estudar?"
                            >
                                <p className="sub-2">Para cartão de crédito, débito e pix, você poderá começar imediatamente. Para compras em boleto bancário, damos um prazo de 2 dias úteis para compensar.</p>
                            </Dropdown>
                            <Dropdown
                                title="Como receberei meu acesso?"
                            >
                                <p className="sub-2">Após o pagamento você receberá uma mensagem no WhatsApp e também no e-mail cadastrado no momento da matrícula com o link da plataforma, login e senha para acessar o Método Zamboni.</p>
                            </Dropdown>
                            <Dropdown
                                title="Ainda estou no início da faculdade, posso adquirir?"
                            >
                                <p className="sub-2">Com certeza! O cronograma é recomendado para alunos de todos os semestres (do 1º ao 10º semestre).</p>
                                <p className="sub-2">Muitos acadêmicos adquirem o cronograma para já irem obtendo a experiência de preparação para OAB. Isso vai facilitar e tornar ainda mais rápida sua aprovação ao final da faculdade.</p>
                            </Dropdown>
                            <Dropdown
                                title="Já sou Bacharel em Direito, o cronograma também serve para mim?"
                            >
                                <p className="sub-2">Sem dúvida!</p>
                                <p className="sub-2">O cronograma é para qualquer pessoa que deseje se preparar para o exame da OAB (não importa se você ainda está na faculdade, se acabou de se formar ou se já é bacharel há bastante tempo).</p>
                            </Dropdown>
                            <Dropdown
                                title="O conteúdo é atualizado? Vou poder usar mais de uma vez?"
                            >
                                <p className="sub-2">Sim!</p>
                                <p className="sub-2">O cronograma é atualizado sempre que ocorrem modificações e você pode utilizá-lo quantas vezes quiser enquanto estiver com acesso à plataforma.</p>
                                <p className="sub-2">Avisamos sobre todas as atualizações por e-mail e/ou através da área do aluno.</p>
                            </Dropdown>
                            <Dropdown
                                title="Quantas horas por dia preciso me dedicar para seguir o cronograma?"
                            >
                                <p className="sub-2">Isso depende do seu estágio atual de conhecimento e da sua velocidade de estudo</p>
                                <p className="sub-2">Mas em média 3 (três) horas por dia costuma ser o suficiente.</p>
                            </Dropdown>
                            <Dropdown
                                title="Terei quanto tempo de acesso?"
                            >
                                <p className="sub-2">Você tem 12 meses de acesso a nossa plataforma onde fica o Cronograma digital. Mas, se preferir pode baixar o material em PDF e ter eles para sempre.</p>
                            </Dropdown>
                            <Dropdown
                                title="Tem garantia?"
                            >
                                <p className="sub-2">Sim!</p>
                                <p className="sub-2">Se em até 7 (sete) dias a contar da data da compra você achar que não valeu a pena, basta pedir reembolso diretamente na plataforma Hotmart ou através do e-mail suporte@alexandrezamboni.com.br que devolveremos todo seu dinheiro.</p>
                            </Dropdown>
                            <Dropdown
                                title="Qual o e-mail de suporte?"
                            >
                                <p className="sub-2">Caso esteja com qualquer outra dúvida, envie um e-mail para suporte@alexandrezamboni.com.br.</p>

                            </Dropdown>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}