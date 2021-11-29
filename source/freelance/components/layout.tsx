import React, { useState } from "react";
import {NextPage} from 'next'
import Head from 'next/head'
import {HeaderLayout} from '../components/headers/headerLayout'
import {FooterLayout} from '../components/footers/footerLayout'
import {SidebarLayout} from '../components/sidebars/sidebarLayout'
import {SITEINFO} from '../commons/constant'

type Props = {
    children?: React.ReactNode;
    home?: boolean;
};


const Layout:NextPage<Props> = ({ children, home }: Props) => {
    const [sidebar, setSidebar] = useState(false)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Head>
                <title>{SITEINFO.TITLE}</title>
                <meta name="description" content={SITEINFO.DISCRIPTION} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {home ? (
                <>
                    <HeaderLayout type={SITEINFO.HEADER_TYPE} />
                    <div className="flex flex-no-wrap">
                        <SidebarLayout type="pc" />

                        {sidebar ? (
                            <SidebarLayout type="spEnable" action={() => {setSidebar(!sidebar)}}/>
                        ) : (
                            <SidebarLayout type="spDisable" action={() => {setSidebar(!sidebar)}}/>
                        )}

                        <main className="flex-grow mx-auto py-5 md:w-4/5 w-11/12 px-6 sm:ml-64">
                            {children}
                        </main>
                    </div>
                    <FooterLayout type={SITEINFO.FOOTER_TYPE}/>
                </>
            ) : (
                <>
                    <HeaderLayout type={SITEINFO.HEADER_TYPE} />

                    <main className="flex-grow">
                        {children}
                    </main>
                </>
                )}
        </div>
    )
}

export default Layout