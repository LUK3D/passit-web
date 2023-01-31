import React from 'react'

import image from '../assets/image01.png';
import { useSignUpDialogStore } from '../components/signup/dialogStore';

export default function Home() {

    const { toggle } = useSignUpDialogStore((state) => state);
    
    
    return (
        <div className='flex flex-col w-full  '>
            <div className='  flex flex-col-reverse md:flex-row p-5 md:p-20'>
                <div className='flex flex-col w-full h-[500px] justify-center'>
                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold'>FAÇA DINHEIRO COM O SEU CARRO NO NOSSO APLICATIVO</p>
                    <p className='mt-10 text-gray-500'>Os benefícios de usar o serviço de taxi Passit incluem a comodidade de solicitar um carro com apenas alguns toques no aplicativo, a possibilidade de verificar a localização do motorista em tempo real e a opção de escolher o tipo de carro desejado. Além disso, o pagamento é feito de forma segura e fácil através do aplicativo, sem precisar carregar dinheiro. O Passit também oferece opções de caronas compartilhadas e programadas, o que pode ser uma ótima opção para quem deseja economizar dinheiro.</p>
                    <div>
                        <button onClick={()=>toggle()} className='px-5 py-2.5 bg-green-500 text-white  mt-5 rounded-md'>
                            Torne-se motorista
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[500px] justify-center relative'>
                    <img className=' w-full right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/3765106/pexels-photo-3765106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/portrait-photo-of-smiling-man-in-white-dress-shirt-and-brown-waistcoattexting-3765106/' target="_blank">Photo by Andrea Piacquadio</a>
                </div>
            </div>
            <div className='flex flex-col bg-green-500 text-white p-10 mx-5 lg:mx-20 mt-20 rounded-lg'>
                <div className='w-full flex flex-col'>
                    <p className='text-center text-2xl font-bold pb-5 my-5'>Porquê escolher Passit?</p>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center mb-20 w-full '>
                    <div className='flex flex-col justify-center items-center w-full text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <p className='text-sm lg:text-lg'>Ganhe dinheiro  com a sua <br /> viatura</p>
                    </div>
                    <div className='mt-10 md:mt-0 flex flex-col justify-center items-center w-full text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                        <p className='text-sm lg:text-lg'>O nosso aplicativo está disponível <br /> para Android e IOS</p>
                    </div>
                    <div className='mt-10 md:mt-0 flex flex-col justify-center items-center w-full text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>
                        <p className='text-sm lg:text-lg'> Atualização em tempo real no mapa</p>
                    </div>
                </div>
            </div>
            <div className=' flex flex-col md:flex-row w-full mt-20 p-5 lg:p-20'>
                <div className='flex flex-col w-full h-[500px] justify-center relative'>
                    <img className=' w-[90%] right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/person-drives-a-luxurious-car-804130/' target="_blank">Photo by Hassan OUAJBIR</a>
                </div>
                <div className='flex flex-col w-full h-[500px] justify-center'>
                    <p className='text-xl md:text-4xl lg:text-6xl font-bold'>GARANTIMOS O SEU CONFORTO</p>
                    <p className='mt-10 text-gray-500'>Viajar pelo nosso aplicativo de taxi é uma experiência confortável e segura. Nossos motoristas são profissionais e experientes, e nossos veículos são regularmente verificados e mantidos para garantir o máximo de conforto durante a viagem. Além disso, nosso aplicativo oferece recursos como pagamento seguro, monitoramento de viagem e classificação de motoristas para garantir a tranquilidade e segurança dos nossos passageiros. Com nosso aplicativo, você pode desfrutar de uma viagem confortável sem se preocupar com nenhum problema.</p>

                </div>

            </div>
            <div className=' flex flex-col-reverse lg:flex-row w-full mt-10 border-t p-5 lg:p-20'>

                <div className='flex flex-col w-full lg:h-[500px] justify-center lg:pr-40'>
                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold mt-10 lg:mt-0'>NÃO CONHECE O LOCAL PRA ONDE VAI?</p>
                    <p className='md:mt-10 text-gray-500'>Não se preocupa, basta colocar o seu destino que o aplicativo trata do resto. Você pode salvar os locais mais frequentados para um acesso rápido 😉</p>

                </div>
                <div className='flex flex-col w-full lg:h-[500px] justify-center relative'>
                    <img className=' w-full right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/6140458/pexels-photo-6140458.jpeg' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/person-drives-a-luxurious-car-804130/' target="_blank">Photo by Hassan OUAJBIR</a>
                </div>
            </div>
        </div>
    )
}
