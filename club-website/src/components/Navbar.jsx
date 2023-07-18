import { useNavigate } from "react-router-dom";
import lightLogo from '../assets/logos/lightLogo.svg';

import './Navbar.css';

const PAGES = [
    {
        pageName: 'Resources',
        nav: '/resources'
    },
    {
        pageName: 'About',
        nav: '/about'
    }
]

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <div className='sticky z-10 top-0 left-0 w-full py-4 px-8 flex justify-between items-center  bg-white bg-opacity-80 backdrop-blur-sm'>
            <div>
                <img
                    src={lightLogo}
                    className='w-20 h-auto'
                />
            </div>
            
            <ul className='flex gap-8 font-poppins font-bold uppercase'>
                {PAGES.map((page) => (
                <li onClick={() => navigate(page.nav)}>
                    <div className=''>
                        <div>

                        </div>
                        <button className='slide duration-300 py-1 px-2 rounded-2xl hover:text-offWhite'>
                            {page.pageName}
                        </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    )
}

