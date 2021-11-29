import Loader from 'react-loader-spinner'

export const LoaderPart = (loaging: any) => {
    if(loaging){
        return (
            <div className="flex">
                <div className="mx-auto my-auto">
                    <Loader
                        type="ThreeDots"
                        color="#1F2937"
                        height={40} 
                        width={40}
                    />
                </div>
            </div>
        )
    } else{
        return null
    }
}
