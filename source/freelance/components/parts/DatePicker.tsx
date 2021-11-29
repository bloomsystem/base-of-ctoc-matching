import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

type props = {
    date: Date;
    setDate: any
}

export const FormDate = (props: props) => {

    return (
        <div className="mb-5">
            <DatePicker 
                dateFormat="yyyy/MM/dd"
                locale="ja"
                selected={props.date} 
                onChange={(date:Date) => props.setDate(date)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
};

export default FormDate;