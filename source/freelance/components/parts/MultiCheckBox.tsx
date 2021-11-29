import { useMultipleChecked } from "../utils/useMultipleChecked";
    
type props = {
    data: Array<any>;
    action: any;
}

export default function MultiCheckBox(props: props) {
    const {
        checked,
        toggleChecked,
    } = useMultipleChecked<string>(props.data.map((row) => row.name));

    const change = (name: string) => {
        toggleChecked(name)
        props.action(checked)
    }

    return (
        <div className="mb-5">
            {props.data.map((row, index) => (
                <label className="items-center mr-3" key={index}>
                    <input 
                        type="checkbox" 
                        onChange={() => change(row.name)}
                        checked={checked.includes(row.name)}
                        value={row.name}
                    />
                    <span className="ml-2">{row.name}</span>
                </label>
            ))}
        </div>
    );
}