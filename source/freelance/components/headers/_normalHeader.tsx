import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from "next/router";
import { SITEINFO } from '../../commons/constant';
import { signIn, signOut, useSession } from 'next-auth/client';
import Button from '../parts/Button';

export const NormalHeader = () => {

    const [ session ] = useSession()
    const router = useRouter(); 
    const [mainMenu, setMainMenu] = useState(false);
    const [iconMenu, setIconMenu] = useState(false);

    const handleClick = (button: string) => {
        switch (button) {
            case "main-menu":
                setMainMenu(!mainMenu)                
                break;
            case "sub-menu":
                setIconMenu(!iconMenu)                
                break            
            default:
                break
        }
    }

    return (
        <header className="sticky top-0 z-50">
            <nav className="bg-gray-800">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button 
                                type="button"
                                onClick={() => handleClick("main-menu")}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                {/* <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/> */}
                                {/* <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt={props.title}/> */}
                                <p className="block lg:hidden h-8 w-auto text-white">{SITEINFO.TITLE}</p>
                                <p className="hidden lg:block h-8 w-auto text-white">{SITEINFO.TITLE}</p>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {SITEINFO.MAIN_MENU.map((menu, index) => {
                                        return (
                                            <Link href={menu.PATH} key={index}>
                                                <a className={`${router.asPath === menu.PATH ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium`}
                                                    aria-current={`${router.asPath === menu.PATH ? 'page' : 'false'}`}
                                                >{menu.NAME}</a>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" 
                                        onClick={() => handleClick("sub-menu")}
                                        className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <img className="h-8 w-8 rounded-full" src={session ? `${session?.user.image}` : `/user.png`} alt=""/>
                                    </button>
                                </div>

                                <div 
                                    className={`${iconMenu ? '' : 'hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1`}>
                                    {session &&
                                    <>
                                        <p className="block px-4 py-2 text-sm text-gray-700">{session?.user.name}</p>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" >Your Profile</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                                        <div className="block px-4 py-2 text-center" >
                                            <Button
                                                text="Sign Out"
                                                action={() => { signOut() }}
                                            />
                                        </div>
                                    </>
                                    }
                                    {!session &&
                                        <div className="block px-4 py-2 text-center" >
                                            <Button
                                                text="Sign In"
                                                action={() => { signIn() }}
                                            />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={`${mainMenu ? '' : 'hidden'} sm:hidde`}
                    id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {SITEINFO.MAIN_MENU.map((menu, index) => {
                            return (
                                <Link href={menu.PATH} key={index}>
                                    <a className={`${router.asPath === menu.PATH ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}
                                        aria-current={`${router.asPath === menu.PATH ? 'page' : 'false'}`}
                                    >{menu.NAME}</a>
                                </Link>
                            )
                        })}
                        </div>
                </div>
            </nav>
        </header>
    )
}
