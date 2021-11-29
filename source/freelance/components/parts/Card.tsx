type props = {
    children?: React.ReactNode;
}

const Card = ({ children }: props) => {
    return (
        <div className="border-l border-r border-b border-l border-gray-400 border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            {children}
        </div>
    )
}
export default Card