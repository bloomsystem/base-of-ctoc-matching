type props = {
    value: string;
}

const Label = ({ value }: props) => {
    return (
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
        >{value}</label>
    )
}
export default Label