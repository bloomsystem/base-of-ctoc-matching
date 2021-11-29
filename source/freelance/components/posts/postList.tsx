import * as React from "react";
import { useQuery } from "react-query";
import { LoaderPart } from "../parts/loaderPart";
import Card from "../parts/Card";
import SmallAvater from "../parts/SmallAvater";
import Link from 'next/link'
import { dateFormat } from "../utils/dayjs";
import Badge from "../parts/Badge";

export const PostList = () => {

    const { data: posts, isLoading } = useQuery<any[]>("posts", async () => {
        const res = await fetch("/api/posts")
        return res.json()
    })

    if(isLoading) return <LoaderPart isLoading={isLoading}/>

    if (!posts?.length || undefined) return (
            <div className="md:flex md:space-x-4 my-2">
                <div className="bg-white shadow appearance-none border rounded w-full flex-1 p-4 mb-2">
                    <ul>
                        <li>no posts</li>
                    </ul>
                </div>
            </div>
    )

    return (
        <div className="grid grid-cols-6 gap-4">
            {posts.map((post, index) => (
                <div className="col-span-6 lg:col-span-3 xl:col-span-2" key={index}>
                    <Card>
                        <div className="mb-5">
                            <p className="text-sm text-gray-600 flex items-center">
                            {post.isMember ?
                                <>
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                    </svg>ユーザー限定
                                </>
                                : 
                                <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                </svg>全体公開
                                </>
                            }
                            </p>
                            <p className="text-sm text-gray-600 text-right">
                                {dateFormat(post.createdAt, "YYYY/MM/DD")}
                            </p>
                            <Badge title={post.postType} key={index} type="square"/>
                            <Link href={`/posts/${post.id}`}>
                                <div className="text-gray-900 font-bold text-xl my-2 truncate">
                                    {post.title}
                                </div>
                            </Link>
                            <p className="Nametext-gray-700 text-base truncate mb-2">
                                {post.body}
                            </p>

                            <div className="truncate mb-1">
                                {post.selectedLang.split(",").map((lang: string, index: number) => (
                                    <Badge title={lang} key={index} type="lang"/>
                                ))}
                            </div>

                            <div className="truncate">
                                {post.selectedTool.split(",").map((tool: string, index: number) => (
                                    <Badge title={tool} key={index} type="tool"/>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <SmallAvater image={post.User.image}/>
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none">{post.User.name}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    )
}