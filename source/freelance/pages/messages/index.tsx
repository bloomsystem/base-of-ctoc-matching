import Link from 'next/link'
import AuthProtected from '../../components/authProtected'
import Layout from '../../components/layout'
import PageHeader from '../../components/parts/PageHeader';

export default function Home() {
  return (
    <Layout
    home
    >
      <AuthProtected>
        <div className="container mx-auto py-4" >
          <PageHeader title="Message"/>
          <Link href={`/`}><a>トップへ</a></Link>
        </div>
      </AuthProtected>
    </Layout>
  )
}
