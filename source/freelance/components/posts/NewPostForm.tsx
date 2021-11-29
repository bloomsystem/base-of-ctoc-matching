import * as React from "react";
import { useMutation, useQueryClient } from "react-query";
import Label from "../parts/Label";
import FormInput from "../parts/FormInput";
import TextArea from "../parts/TextArea"
import Button from "../parts/Button";
import CheckBox from "../parts/CheckBox";
import MultiCheckBox from "../parts/MultiCheckBox";
import SelectBox from "../parts/SelectBox";
import FormDate from "../parts/DatePicker";

const NewPostForm = () => {
  const queryClient = useQueryClient();
  
  const [form, update] = React.useState({
    postType: "",
    rewardType: "",
    amount: 0,
    title: "",
    body: "",
    isMember: false,
    selectedLang: "",
    selectedTool: "",
    startDate: new Date(),
    endDate: new Date()
  });

  const langLists = [
    { name: "HTML/CSS" }, { name: "C/C++" }, { name: "C#" }, { name: "Java" }, { name: "PHP" }, { name: "JavaScript" }, { name: "Python" }, { name: "Ruby" }, { name: "SQL" }
  ]

  const setLang = (lang: any) => {
    update({...form, selectedLang: lang.join(",")})
  }

  const toolLists = [
    { name: "Git" }, { name: "AWS" }, { name: "Docker" }, { name: " Slack" }, { name: "Figma/XD" }, { name: "Firebase" }, { name: "CI" }
  ]

  const setTool = (tool: any) => {
    update({...form, selectedTool: tool.join(",")})
  }


  const { mutate } = useMutation(
    () => {
      return fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(form),
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const saveTodo = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    mutate();
  };

  return (
    <>
      <Label value="募集タイプ" />
      <SelectBox
        lists={["案件","学習"]}
        value={form.postType}
        action={(e:any) => update({ ...form, postType: e.target.value })}
        helper={"※報酬が発生する場合は案件、報酬が発生しない場合は学習となります"}
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <Label value="報酬形態" />
          <SelectBox
            lists={["請負(固定報酬)","準委任(時間給)"]}
            value={form.rewardType}
            action={(e:any) => update({ ...form, rewardType: e.target.value })}
          />
        </div>
        <div className="col-span-1">
          <Label value="金額" />
          <FormInput
            value={form.amount}
            type="number"
            action={(e:any) => update({ ...form, amount: e.target.value })}
          />
        </div>
      </div>

      <Label value="期間"/>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <FormDate
            date={form.startDate}
            setDate={(date: Date) => update({...form, startDate: date})}
          />
        </div>
        <div className="col-span-1">
          <FormDate
            date={form.endDate}
            setDate={(date: Date) => update({...form, endDate: date})}
          />
          </div>
      </div>

      <Label value="タイトル" />
      <FormInput
        value={form.title}
        placeholder="(例)Swiftでの個人アプリ開発ができるチームを募集します"
        type="text"
        action={(e:any) => update({ ...form, title: e.target.value })}
      />

      <Label value="募集内容" />
      <TextArea
        value={form.body}
        placeholder="(例)一緒に楽しみながらノウハウを共有してチーム開発ができることが第一目標です。"
        rows={5}
        action={(e:any) => update({ ...form, body: e.target.value })}
        helper="※募集内容はできるだけ詳しく記載ください"
      />

      <Label value="使用言語" />
      <MultiCheckBox
        data={langLists}
        action={(e:any) => setLang(e)}
      />

      <Label value="使用技術やツール等" />
      <MultiCheckBox
        data={toolLists}
        action={(e:any) => setTool(e)}
      />

      <Label value="公開範囲" />
      <CheckBox
        value="会員ユーザーにのみ公開する"
        checked={form.isMember}
        action={() => update({ ...form, isMember: !form.isMember })}
      />

      <Button
        text="新規登録"
        action={saveTodo}
      />
    </>
  );
};
export default NewPostForm;