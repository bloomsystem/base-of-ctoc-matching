import Link from "next/link"
import {SITEINFO} from "../../commons/constant"

export const NormalFooter = () => {
    return (
        <footer className="bg-gray-600 text-gray-800 text-sm py-4 sm:ml-64">
            <div className="md:flex md:space-x-4 m-2">
                <div className="flex-1 p-4 bg-gray-300 rounded mb-2">
                    <h1>{SITEINFO.TITLE}</h1>
                    <p>{SITEINFO.DISCRIPTION}</p>
                </div>
                <div className="flex-1 p-4 bg-gray-300 rounded mb-2">
                    {SITEINFO.MAIN_MENU.map((menu, index) => {
                        return (
                            <Link href={menu.PATH} key={index}>
                                <a><p>{menu.NAME}</p></a>
                            </Link>
                        )
                    })}
                </div>
                <div className="flex-1 p-4 bg-gray-300 rounded mb-2">
                    {SITEINFO.SUB_MENU.map((menu, index) => {
                        return (
                            <Link href={menu.PATH} key={index}>
                                <a><p>{menu.NAME}</p></a>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <p className="text-center">Powered by {SITEINFO.TITLE}</p>
        </footer>
    )
}