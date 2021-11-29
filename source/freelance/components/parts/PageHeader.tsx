type props = {
    title: string;
}

const PageHeader = ({ title }: props) => {
    return (
        <h1 className="text-xl text-gray-800 font-bold mb-3">{title}</h1>
    )
}
export default PageHeader