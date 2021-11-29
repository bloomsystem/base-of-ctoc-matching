type props = {
    title: string;
    type: string;
}

const Badge = (props: props) => {
    if(props.type === "lang") {
        return (
            <span
                className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-purple-100 bg-purple-600 rounded-full`}>
                {props.title}
            </span>
        )
    }

    if(props.type === "square") {
        return (
            <span
                className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-gray-100 bg-gray-600 rounded`}>
                {props.title}
            </span>
        )
    }
    
    return (
        <span
            className={`inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-pink-100 bg-pink-400 rounded-full`}>
            {props.title}
        </span>
    )
}
export default Badge