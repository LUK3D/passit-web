import { useSignUpDialogStore } from "./dialogStore";



const SignUpDialog = () => {

    const {isOpen,toggle } = useSignUpDialogStore((state) => state);
    return ( 
        <div className={` ${isOpen?'flex':'hidden'} p-2 md:p-10 lg:p-0 fixed right-0 top-0 z-20 w-screen h-screen bg-black/50  flex-col justify-center items-center`}>
            <div className="w-full h-full md:w-[600px] md:h-[700px] bg-white rounded-lg shadow-xl p-5 md:p-10 flex flex-col overflow-y-auto">
                <h1 className="text-xl md:text-4xl font-bold">Falta pouco para fazeres parte do time PassiT</h1>
                <p className="mt-4 md:mt-10 text-xs md:text-sm">Para começar, precisamos de algumas informações para validar a sua candidatura 😊</p>

                <div className="w-full p-2 border-2 rounded-lg mt-5 md:mt-10">
                    <input className="w-full outline-none" placeholder="Nome Completo" type="text" />
                </div>
                <div className="w-full p-2 border-2 rounded-lg mt-5">
                    <input className="w-full outline-none" placeholder="Bilhete de Identidade" type="text" />
                </div>
                <div className="w-full p-2 border-2 rounded-lg mt-5">
                    <input className="w-full outline-none" placeholder="Telefone" type="text" />
                </div>
                <div className="w-full p-2 border-2 rounded-lg mt-5">
                    <input className="w-full outline-none" placeholder="Email" type="text" />
                </div>

                <p className="mt-4 md:mt-10 text-xs md:text-sm">É importante fornecer informações válidas pois serão usadas para entrar em contacto com você posteriormente</p>
                <div className="w-full flex flex-col-reverse justify-between md:flex-row">
                        <button onClick={()=>toggle()} className='px-10 py-2.5 bg-white text-green-500 shadow border  mt-5 rounded-md'>
                            Cancelar
                        </button>
                        <button className='px-5 py-2.5 bg-green-500 text-white  mt-5 rounded-md shadow'>
                            Enviar minha candidatura
                        </button>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpDialog;