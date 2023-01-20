import googleplay from '../assets/googleplay.svg';
const Footer = () => {

    return (
        <div className="w-full h-[200px] bg-green-500 flex justify-between items-center p-20 text-white">
            <a href="#">
                <img src={googleplay} alt="" />
            </a>
            <ul className="flex items-center">
                <li className="mx-5"><a href="#">Termos e Condições</a></li>
                <li className="mx-5"><a href="#">©2019 PassiT</a></li>
            </ul>
        </div>
    );
}

export default Footer;