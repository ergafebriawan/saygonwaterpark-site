import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import {BiMenu} from "react-icons/bi";

export default function MainNavbar(props) {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className="sticky top-0 z-30">
                <nav className="bg-cyan-600 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                    <div className="container flex flex-wrap items-center justify-between mx-auto">
                        <a href="/" className="flex items-center">
                            <img
                                src={props.logo}
                                className="mr-3 h-14 aspect-square"
                                alt="Logo"
                            />
                            <span className="self-center text-xl font-semibold text-gray-100 whitespace-nowrap dark:text-white">
                                Saygon Waterpark
                            </span>
                        </a>
                        <button onClick={() => setShow(!show)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 hover:text-cyan-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <BiMenu size={24}/>
                        </button>
                        <div className={`${show == true ? '' : 'hidden'} w-full  md:block md:w-auto`} id="navbar-default">
                            <ul className="flex flex-col px-4 pt-4 md:flex-row md:space-x-8 md:text-sm md:font-medium dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="/">
                                        {props.active_page == 'beranda' ?
                                            <MenuItem menu="Beranda" active={true} />
                                            :
                                            <MenuItem menu="Beranda" />
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        {props.active_page == 'fasilitas' ?
                                            <MenuDropdown menu="Fasilitas" active={true} />
                                            :
                                            <MenuDropdown menu="Fasilitas" />
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        {props.active_page == 'about' ?
                                            <MenuItem menu="Tentang Kami" active={true} />
                                            :
                                            <MenuItem menu="Tentang Kami" />
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        {props.active_page == 'kontak' ?
                                            <MenuItem menu="Kontak" active={true} />
                                            :
                                            <MenuItem menu="Kontak" />
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/promo">
                                        {props.active_page == 'promo' ?
                                            <MenuItem menu="Promo" active={true} />
                                            :
                                            <MenuItem menu="Promo" />
                                        }
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* <div className="flex items-center justify-between px-2 py-4 bg-cyan-600 min-w-min">
                    <div className="flex ml-2">
                        <img
                            src={props.logo}
                            className="mr-3 h-14 aspect-square"
                            alt="Logo"
                        />
                        <span className="self-center text-xl font-semibold text-gray-100 whitespace-nowrap dark:text-white">
                            Saygon Waterpark
                        </span>
                    </div>
                    <div className="flex mr-16 space-x-10">
                        <a href="/">
                            {props.active_page == 'beranda' ? 
                            <MenuItem menu="Beranda" active={true} />
                            :
                            <MenuItem menu="Beranda"/>
                            }
                        </a>
                        <a>
                        {props.active_page == 'fasilitas' ? 
                            <MenuDropdown menu="Fasilitas" active={true} />
                            :
                            <MenuDropdown menu="Fasilitas" />
                            }
                        </a>
                        <a href="/about">
                        {props.active_page == 'about' ? 
                            <MenuItem menu="Tentang Kami" active={true} />
                            :
                            <MenuItem menu="Tentang Kami" />
                            }
                        </a>
                        <a href="/about">
                        {props.active_page == 'kontak' ? 
                            <MenuItem menu="Kontak" active={true} />
                            :
                            <MenuItem menu="Kontak" />
                            }
                        </a>
                        <a href="/promo">
                        {props.active_page == 'promo' ? 
                            <MenuItem menu="Promo" active={true} />
                            :
                            <MenuItem menu="Promo" />
                            }
                        </a>
                    </div>
                </div> */}
            </section>
        </>
    );
}

function MenuItem(props) {
    return (
        <>
            <span className={`flex mb-5 items-center text-sm font-semibold ${props.active != true ? `text-gray-50` : `text-cyan-800`}  hover:text-cyan-800`}>
                {props.menu}
            </span>
        </>
    );
}

function MenuDropdown(props) {
    const [show, setShow] = useState(false);
    return (
        <>
            <span onClick={() => setShow(!show)} className={`flex mb-5 items-center text-sm font-semibold ${props.active != true ? `text-gray-50` : `text-cyan-800`}  hover:text-cyan-800`}>
                {props.menu}
                <HiChevronDown />
            </span>
            {show == false ? '' :
                <div className="absolute p-2 overflow-hidden bg-white rounded-md shadow-md">
                    <ul className="mt-4">
                        <li>
                            <a href="/map">
                                <ItemsMenuDropdown menu="Wahana" />
                            </a>
                        </li>
                        <li>
                            <a href="/map">
                                <ItemsMenuDropdown menu="Fasilitas" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <ItemsMenuDropdown menu="Gallery" />
                            </a>
                        </li>
                        <li>
                            <a href="/map">
                                <ItemsMenuDropdown menu="Peta" />
                            </a>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
}

function ItemsMenuDropdown(props) {
    return (
        <>
            <div className="mb-3 ml-2 mr-5 text-sm font-semibold text-gray-800 hover:text-cyan-600">
                {props.menu}
                <hr className="mt-1" />
            </div>
        </>
    );
}