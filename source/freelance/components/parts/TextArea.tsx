type props = {
    value: string;
    action: any
    placeholder?: string
    rows?: number;
    helper?: string
}

const TextArea = (props: props) => {
    return (
        <div className="mb-5">
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={props.rows}
                value={props.value}
                onChange={props.action}
                placeholder={props.placeholder}
            />
            <p className="mt-2 text-sm text-gray-500">{props.helper}</p>
        </div>
    )
}
export default TextArea