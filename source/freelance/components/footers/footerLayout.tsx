import {NormalFooter} from "./_normalFooter"
import { TwoColumnFooter } from "./_twoColumnFooter"

export const FooterLayout = (props: {type: string}) => {

    switch (props.type) {
        case "normal":
            return (
                <NormalFooter/>
            )
        case "twoColumn":
            return (
                <TwoColumnFooter/>
            )  
        default:
            return null
    }
}
