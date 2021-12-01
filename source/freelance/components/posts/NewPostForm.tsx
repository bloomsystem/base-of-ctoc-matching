import * as React from "react";
import { useMutation, useQueryClient } from "react-query";
import { LoaderPart } from "../parts/loaderPart";
import Label from "../parts/Label";
import FormInput from "../parts/FormInput";
import TextArea from "../parts/TextArea"
import Button from "../parts/Button";
import CheckBox from "../parts/CheckBox";
import MultiCheckBox from "../parts/MultiCheckBox";
import SelectBox from "../parts/SelectBox";
import FormDate from "../parts/DatePicker";
import Alert from "../parts/Alert";
import { createPost } from "../utils/fetchApi";
import { useForm, Controller } from 'react-hook-form';
import { postForm } from "../utils/interface";

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

  const { register, formState: { errors }, handleSubmit, control } = useForm<postForm>();

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


  const mutation = useMutation(
    (data: postForm) => {
      return createPost(JSON.stringify(data)) 
    }, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const onSubmit = (data: postForm) => {
    console.log("dar",data);
    mutation.mutate(data);
  };

  return (
    <>
      <Label value="募集タイプ" />
      <Controller
        control={control}
        name="postType"
        defaultValue="案件"
        render={({ field }) => (
          <SelectBox
            value={field.value}
            lists={["案件","学習"]}
            onChange={field.onChange}
            helper={"※報酬が発生する場合は案件、報酬が発生しない場合は学習となります"}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <Label value="報酬形態" />
          <Controller
            control={control}
            name="rewardType"
            defaultValue="請負(固定報酬)"
            render={({ field }) => (
              <SelectBox
                value={field.value}
                lists={["請負(固定報酬)","準委任(時間給)"]}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className="col-span-1">
          <Label value="金額" />
          <FormInput
            type="number"
            register={register}
            label="amount"
            defaultValue={0}
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
        placeholder="(例)Swiftでの個人アプリ開発ができるチームを募集します"
        type="text"
        register={register}
        required
        label="title"
        errors={errors.title}
        errMessage="タイトルは必須です"
      />

      <Label value="募集内容" />
      <TextArea
        label="body"
        placeholder="(例)一緒に楽しみながらノウハßウを共有してチーム開発ができることが第一目標です。"
        rows={5}
        helper="※募集内容はできるだけ詳しく記載ください"
        required
        errors={errors.body}
        errMessage="募集内容は必須です"
        register={register}
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

      {mutation.isLoading ? ( <LoaderPart loading={mutation.isLoading} /> ) : null}

      {mutation.isSuccess ? ( <Alert color="success" message="投稿しました" /> ) : null}

      <Button
        text="新規登録"
        action={handleSubmit(onSubmit)}
      />
    </>
  );
};
export default NewPostForm;