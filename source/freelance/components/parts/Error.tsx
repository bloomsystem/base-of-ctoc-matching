
export const Error = () => {
    return (
        <div className="container mx-auto my-4 py-4" >
            <div className="p-8">
                <div className="bg-white rounded-lg shadow-xl">
                    <div className="p-16">
                        <div><img className="w-32 md:w-48 mx-auto" src="/error.svg"/></div>
                        <div className="mt-8 text-center">
                            <h1 className="font-bold text-lg text-gray-700 mb-1">データの取得に失敗しました</h1>
                            <p className="text-gray-600">ブラウザを再読み込みするか、しばらく経ってからお試しください</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error