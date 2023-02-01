import React from 'react'

import image from '../assets/image01.png';
import { useSignUpDialogStore } from '../components/signup/dialogStore';

export default function Passageiro() {

    const { toggle } = useSignUpDialogStore((state) => state);


    return (
        <div className='flex flex-col w-full  '>
            <div className='  flex flex-col-reverse md:flex-row p-5 md:p-20 bg-green-500 text-white'>
                <div className='flex flex-col w-full h-[500px] justify-center'>
                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold'>BONS PREÇOS, BOAS CORRIDAS.</p>
                    <p className='mt-10 '>Os benefícios de usar o serviço de taxi Passit incluem a comodidade de solicitar um carro com apenas alguns toques no aplicativo, a possibilidade de verificar a localização do motorista em tempo real e a opção de escolher o tipo de carro desejado. Além disso, o pagamento é feito de forma segura e fácil através do aplicativo, sem precisar carregar dinheiro. O Passit também oferece opções de caronas compartilhadas e programadas, o que pode ser uma ótima opção para quem deseja economizar dinheiro.</p>
                    <div>
                        <button onClick={() => toggle()} className='px-5 py-2.5 bg-white text-green-500  mt-10 rounded-md'>
                            Baixe o aplicativo
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[500px] justify-center relative'>
                    <img className=' w-full right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/3765113/pexels-photo-3765113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/happy-ethnic-man-with-backpack-hailing-taxi-on-street-3765113/' target="_blank">Photo by Andrea Piacquadio</a>
                </div>
            </div>
            <div className='flex flex-col bg-green-600 text-white p-10 py-30 '>
                <div className='w-full flex flex-col'>
                    <p className='text-center text-4xl md:text-8xl font-black pb-5 md:my-5 tracking-tight'>O PASSIT ESTÁ COMPROMETIDO EM SER O APLICATIVO DE MOBILIDADE MAIS JUSTO E QUE OFERECE AS MELHORES CONDIÇÕES PARA OS NOSSOS MOTORISTAS.</p>
                </div>

            </div>
            <div className=' flex flex-col md:flex-row w-full mt-20 p-5 lg:p-20'>
                <div className='flex flex-col w-full h-[500px] justify-center relative'>
                    <img className=' w-[90%] right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/4606402/pexels-photo-4606402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/man-in-white-dress-shirt-sitting-inside-car-4606402/' target="_blank">Cottonbro Studio</a>
                </div>
                <div className='flex flex-col w-full h-[500px] justify-center'>
                    <p className='text-xl md:text-4xl lg:text-6xl font-bold pr-40'>VIAJE COM TRANQUILIDADE</p>
                    <p className='mt-10 text-gray-500'>Viajar pelo nosso aplicativo de taxi é uma experiência confortável e segura. Nossos motoristas são profissionais e experientes, e nossos veículos são regularmente verificados e mantidos para garantir o máximo de conforto durante a viagem. Além disso, nosso aplicativo oferece recursos como pagamento seguro, monitoramento de viagem e classificação de motoristas para garantir a tranquilidade e segurança dos nossos passageiros. Com nosso aplicativo, você pode desfrutar de uma viagem confortável sem se preocupar com nenhum problema.</p>

                </div>

            </div>
            <div className=' flex flex-col-reverse lg:flex-row w-full mt-10 border-t p-5 lg:p-20'>

                <div className='flex flex-col w-full lg:h-[500px] justify-center lg:pr-40'>
                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold mt-10 lg:mt-0'>NÃO CONHECE O LOCAL PRA ONDE VAI?</p>
                    <p className='md:mt-10 text-gray-500'>Não se preocupa, basta colocar o seu destino que o aplicativo trata do resto. Você pode salvar os locais mais frequentados para um acesso rápido 😉</p>

                </div>
                <div className='flex flex-col w-full lg:h-[500px] justify-center relative'>
                    <img className=' w-full right-0 h-full rounded-lg object-cover' src='https://images.pexels.com/photos/6280953/pexels-photo-6280953.jpeg' alt="" />
                    <a className='text-xs text-gray-500 mt-2' href='https://www.pexels.com/photo/person-drives-a-luxurious-car-804130/' target="_blank">Photo by Hassan OUAJBIR</a>
                </div>
            </div>
        </div>
    )
}
