import { useState } from "react";

type useMultipleCheckedRet<T> = {
    checked: T[];
    toggleChecked: (tgt: T) => void;
};

export function useMultipleChecked<T>(initVal?: T[]): useMultipleCheckedRet<T> {
    
    const [checked, setChecked] = useState<T[]>([]);

    const toggleChecked = (tgt: T) => {
        if (checked.includes(tgt)) {
            setChecked([...checked.filter((item) => item !== tgt)]);
            return [...checked.filter((item) => item !== tgt)]
        } else {
            setChecked([...checked.concat([tgt])]);
            return [...checked.concat([tgt])]
        }
    };

    return {
        checked,
        toggleChecked
    };
}