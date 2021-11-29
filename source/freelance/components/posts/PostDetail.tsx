import * as React from "react";
import { useQuery } from "react-query";
import { Post } from "@prisma/client";
import { LoaderPart } from "../parts/loaderPart";
import PageHeader from '../../components/parts/PageHeader';
import SmallAvater from "../parts/SmallAvater";
import { dateFormat } from "../utils/dayjs";


type props = {
  postId: string | string[] | undefined
}

const PostDetail = (props: props) => {
  const { data: post, isLoading } = useQuery<Post | any>("post", async () => {
    const res = await fetch(`/api/posts/${props.postId}`)
    return res.json()
  })

  if(isLoading) return <LoaderPart isLoading={isLoading}/>
  
  if (post === undefined) return (
    <div className="md:flex md:space-x-4 my-2">
        <div className="bg-white shadow appearance-none border rounded w-full flex-1 p-4 mb-2">
            <ul>
                <li>no post</li>
            </ul>
        </div>
    </div>
  )

  return (
    <>
      <PageHeader title={post.title}/>
      <div className="bg-white shadow appearance-none border w-full flex-1 p-4 rounded mb-2">
        <p>{dateFormat(post.createdAt,"YYYY/MM/DD")}</p>
        <p>{dateFormat(post.updatedAt,"YYYY/MM/DD")}</p>
        <p>限定公開：{post.isMember}</p>
        <p>募集タイプ：{post.postType}</p>
        <p>報酬タイプ：{post.rewardType}</p>
        <p>金額：{post.amount}</p>
        <p>使用言語{post.selectedLang}</p>
        <p>使用ツール{post.selectedTool}</p>
        <p>実施期間{dateFormat(post.startDate,"YYYY/MM/DD")}〜{dateFormat(post.endDate,"YYYY/MM/DD")}</p>

        <p className="mb-5">{post.body}</p>
        <SmallAvater image={post.User.image}/>
        <p className="mb-5">{post.User.name}</p>

      </div>
    </>  
  );
};
export default PostDetail;