import { Path, UseFormRegister } from "react-hook-form";

type props = {
    placeholder?: string
    type: string;
    helper?: string;
    label: Path<any>;
    register: UseFormRegister<any>;
    required?: boolean;
    errors?: any;
    errMessage?: string
    defaultValue?: string|number 
}

const FormInput = ( props : props) => {
    return (
        <div className="mb-5">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={props.placeholder}
                type={props.type}
                defaultValue={props.defaultValue}
                {...props.register(props.label, {required: props.required} )}
            />
            { props.errors && <p className="mt-2 text-sm text-red-500">{props.errMessage}</p> }
            { props.helper !== undefined && <p className="mt-2 text-sm text-gray-500">{props.helper}</p> }
        </div>
    )
}
export default FormInput