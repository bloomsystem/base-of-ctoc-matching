type props = {
    value: string | number;
    action: any
    placeholder?: string
    type: string;
    helper?: string;
}

const FormInput = (props: props) => {
    return (
        <div className="mb-5">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={props.placeholder}
                type={props.type}
                value={props.value}
                onChange={props.action}
            />
            <p className="mt-2 text-sm text-gray-500">{props.helper}</p>
        </div>
    )
}
export default FormInput