import * as React from "react";
import { useQuery } from "react-query";
import { Post } from "@prisma/client";
import { LoaderPart } from "../parts/loaderPart";
import Error from "../parts/Error"
import { fetchPost } from "../utils/fetchApi";
import AuthProtected from '../authProtected'
import PostDetailContents from "./PostDetailContents";


type props = {
  postId: string|string[]|undefined
}

const PostDetail = (props: props) => {
  const { data: post, isLoading, isError } = useQuery<Post|any>(
    ["post", props.postId], async () => fetchPost(props.postId)
  )

  if(isLoading) return <LoaderPart isLoading={isLoading}/>

  if(isError) return ( <Error/> )

  if (post === undefined) return (
    <div className="md:flex md:space-x-4 my-2">
        <div className="bg-white shadow appearance-none border rounded w-full flex-1 p-4 mb-2">
            <ul>
                <li>no post</li>
            </ul>
        </div>
    </div>
  )

  if (post.isMember) return (
    <AuthProtected>
      <PostDetailContents post={post}/>
    </AuthProtected>
  )

  return (
    <PostDetailContents post={post}/>
  );
};

export default PostDetail;