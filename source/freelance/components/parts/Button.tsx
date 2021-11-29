type props = {
    text: string;
    action: any
}

const Button = (props: props) => {
    return (
        <button
            onClick={props.action}
            className="px-4 py-2 m-2 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >{props.text}</button>
    )
}
export default Button