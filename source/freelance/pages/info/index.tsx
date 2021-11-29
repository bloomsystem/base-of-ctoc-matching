import Link from 'next/link'
import AuthProtected from '../../components/authProtected'
import Layout from '../../components/layout'
import PageHeader from '../../components/parts/PageHeader';

export default function Home() {
  return (
    <AuthProtected>
      <Layout
        home
      >
        <div className="container mx-auto py-4" >
          <PageHeader title="Information"/>
          <Link href={`/`}><a>トップへ</a></Link>
        </div>
      </Layout>
    </AuthProtected>
  )
}
