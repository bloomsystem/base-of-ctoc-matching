import {NormalHeader} from "./_normalHeader"

export const HeaderLayout = (props: {type: string}) => {

    if (props.type === "normal") {
        return (
            <NormalHeader/>
        )
    } else {
        return null
    }

}
