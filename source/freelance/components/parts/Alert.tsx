type props = {
    color: string, 
    message: string
}

const Alert = (props: props) => {

    if(props.color === "success"){
        return (
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-purple-500">
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    {props.message}
                </span>
            </div>
        )
    }

    if(props.color === "danger"){
        return (
            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
                <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                </span>
                <span className="inline-block align-middle mr-8">
                    {props.message}
                </span>
            </div>
        )
    }

    return (
        <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-teal-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                {props.message}
            </span>
        </div>
    )
}
export default Alert