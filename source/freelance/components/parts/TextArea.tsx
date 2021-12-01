import { Path, UseFormRegister } from "react-hook-form";


type props = {
    label: Path<any>;
    placeholder?: string
    rows?: number;
    helper?: string;
    required?: boolean;
    errors?: any;
    errMessage?: string
    defaultValue?: string|number 
    register: UseFormRegister<any>;
}

const TextArea = (props: props) => {
    return (
        <div className="mb-5">
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={props.rows}
                placeholder={props.placeholder}
                {...props.register(props.label, {required: props.required} )}
            />
            { props.errors && <p className="mt-2 text-sm text-red-500">{props.errMessage}</p> }
            { props.helper !== undefined && <p className="mt-2 text-sm text-gray-500">{props.helper}</p> }
        </div>
    )
}
export default TextArea