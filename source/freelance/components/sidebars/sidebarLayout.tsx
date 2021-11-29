import {SITEINFO} from '../../commons/constant'
import Link from 'next/link'

export const SidebarLayout = (
    props: {
        type: string,
        action?: any
    }) => {

    switch (props.type) {
        case "pc":
            return (
                <aside className="sidebar w-64 fixed bg-gray-800 shadow flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <ul className="mt-12">
                            {SITEINFO.SIDE_MENU.map((menu, index) => {
                                return (
                                    <Link href={menu.PATH} key={index}>
                                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                            <div className="flex items-center">
                                                <span className="text-sm  ml-2">{menu.NAME}</span>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </aside>
            )

        case "spEnable":
            return (
                <aside className="sidebar w-64 z-40 fixed bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out" id="mobile-nav">
                    <div className="h-10 w-10 bg-gray-800 absolute right-0 mt-2 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" 
                        onClick={props.action}
                    >
                        <img src="/sidebar-toggler.svg"/>
                    </div>
                    <div className="px-8">
                        <ul className="mt-12">
                            {SITEINFO.SIDE_MENU.map((menu, index) => {
                                return (
                                    <Link href={menu.PATH} key={index}>
                                        <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                            <div className="flex items-center">
                                                <span className="text-sm  ml-2">{menu.NAME}</span>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </aside>
            )  

        case "spDisable":
            return (
                <aside className="sidebar w-0 fixed bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out" id="mobile-nav">
                    <div className="h-10 w-10 bg-gray-800 absolute right-0 mt-2 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" 
                        onClick={props.action}
                    >
                        <img src="/sidebar-toggler.svg"/>
                    </div>
                </aside>
            )

        default:
            return null
        }

}
