
import { signIn } from 'next-auth/client'
import Layout from '../components/layout'
import Button from '../components/parts/Button'

export const Login = () => {
    return (
        <Layout>
            <div className="container mx-auto my-4 py-4" >
                <div className="p-8">
                    <div className="bg-white rounded-lg shadow-xl">
                        <div className="p-16">
                        <div><img className="w-32 md:w-48 mx-auto" src="/login.jpg"/>

                        </div>
                        <div className="mt-8 text-center">
                            <h1 className="font-bold text-lg text-gray-700 mb-1">サインインが必要です</h1>
                            <p className="text-gray-600">この先を閲覧するにはサインインが必要です</p>
                            <Button
                                text="Sign In"
                                action={() => { signIn() }}
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login