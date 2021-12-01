import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ja", ja);

type props = {
    date: Date;
    onChange: any;
    required: boolean
    label?: string
    errors?: boolean
    errMessage?: string
}

export const FormDate = (props: props) => {
    return (
        <div className="mb-5">
            <DatePicker 
                dateFormat="yyyy/MM/dd"
                locale="ja"
                selected={props.date} 
                onChange={props.onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            { props.errors && <p className="mt-2 text-sm text-red-500">{props.errMessage}</p> }
        </div>
    );
};

export default FormDate;