import { ReactNode } from 'react';
import { useSession } from 'next-auth/client';
import { Login } from '../pages/login';

type Props = {
    children?: ReactNode
}

const AuthProtected = ({children}: Props) => {
    const [session, loading] = useSession()
    if(loading) return null

    if(!loading && !session) {
        return <Login/>
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default AuthProtected