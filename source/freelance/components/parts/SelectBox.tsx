type props = {
    value: string;
    lists: Array<string>;
    onChange?: any;
    helper?: string;
}

const SelectBox = (props: props) => {
    return (
        <div className="mb-5">
            <select 
                className="form-select block shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                defaultValue={props.value}
                onChange={props.onChange}
            >
                {props.lists.map((list, index) => (
                    <option key={index} value={list}>{list}</option>
                ))}
            </select>
            { props.helper !== undefined && <p className="mt-2 text-sm text-gray-500">{props.helper}</p> }
        </div>
    )
}
export default SelectBox