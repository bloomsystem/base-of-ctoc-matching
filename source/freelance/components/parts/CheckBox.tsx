type props = {
    value: string;
    checked: boolean;
    onChange: any;
}

const CheckBox = (props: props) => {
    return (
        <div className="mb-5">
            <label className="flex items-center mb-5">
                <input 
                    type="checkbox" 
                    className="form-checkbox"
                    checked={props.checked}
                    onChange={props.onChange}
                />
                <span className="ml-2">{props.value}</span>
            </label>
        </div>
    )
}

export default CheckBox