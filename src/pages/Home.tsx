import React from 'react'

export default function Home() {
    return (
        <div className='p-10 flex '>
            <div className='flex flex-col w-full h-[500px] justify-center'>
                <p className='text-6xl font-bold'>FAÇA DINHEIRO COM O SEU CARRO NO NOSSO APLICATIVO</p>
                <p className='mt-10 text-gray-500'>Os benefícios de usar o serviço de taxi Passit incluem a comodidade de solicitar um carro com apenas alguns toques no aplicativo, a possibilidade de verificar a localização do motorista em tempo real e a opção de escolher o tipo de carro desejado. Além disso, o pagamento é feito de forma segura e fácil através do aplicativo, sem precisar carregar dinheiro. O Passit também oferece opções de caronas compartilhadas e programadas, o que pode ser uma ótima opção para quem deseja economizar dinheiro.</p>
                <div>
                    <button className='px-5 py-2.5 bg-green-500 text-white  mt-5'>
                        Torne-se motorista
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-[500px] justify-center'></div>
        </div>
    )
}
