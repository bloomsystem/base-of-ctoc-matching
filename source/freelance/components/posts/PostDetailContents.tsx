import * as React from "react";
import SmallAvater from "../parts/SmallAvater";
import { dateFormat } from "../utils/dayjs";
import Badge from "../parts/Badge";

const PostDetailContents = (props: any) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 lg:col-span-3 bg-white shadow appearance-none border w-full flex-1 p-4 rounded mb-2">
        <p className="text-sm text-gray-600 flex items-center mb-2">
          {props.post.isMember ?
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

        <p className="text-sm text-gray-600 flex items-center mb-2">
          投稿日：{dateFormat(props.post.createdAt,"YYYY/MM/DD")} / 更新日{dateFormat(props.post.updatedAt,"YYYY/MM/DD")}
        </p>
        <Badge title={props.post.postType} type="square" />
        <div className="text-gray-900 font-bold text-xl my-2">
          {props.post.title}
        </div>
        <div>
          <span className="text-sm text-gray-600 mb-2 mr-2">使用言語</span>
          {props.post.selectedLang.split(",").map((lang: string, index: number) => (
              <Badge title={lang} key={index} type="lang"/>
          ))}
        </div>
        <div>
          <span className="text-sm text-gray-600 mb-2 mr-2">使用ツール</span>
          {props.post.selectedTool.split(",").map((tool: string, index: number) => (
              <Badge title={tool} key={index} type="tool"/>
          ))}
        </div>
        <div>
          <span className="text-sm text-gray-600 mb-2 mr-2">報酬タイプ</span>
          <span>{props.post.rewardType}</span>
        </div>
        <div>
          <span className="text-sm text-gray-600 mb-2 mr-2">金額</span>
          <span>{props.post.amount}円</span>
        </div>
        <div>
          <span className="text-sm text-gray-600 mb-2 mr-2">実施期間</span>
          <span>{dateFormat(props.post.startDate,"YYYY/MM/DD")}〜{dateFormat(props.post.endDate,"YYYY/MM/DD")}</span>
        </div>

        <div className="my-5">
          <p>{props.post.body}</p>
        </div>

      </div>
      <div className="col-span-4 lg:col-span-1">
        <div className="bg-white shadow appearance-none border w-full flex-1 p-4 rounded mb-2">
          <p className="text-sm text-gray-600 mb-2 mr-2">投稿者</p>
          <div className="flex items-center">
            <SmallAvater image={props.post.User.image}/>
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{props.post.User.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PostDetailContents;