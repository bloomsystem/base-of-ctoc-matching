type props = {
    image: string;
}

const SmallAvater = ({ image }: props) => {
    return (
        <img className="w-10 h-10 rounded-full mr-4" src={image} />
    )
}
export default SmallAvater