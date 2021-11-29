import AuthProtected from '../../components/authProtected'
import Layout from '../../components/layout'
import PageHeader from '../../components/parts/PageHeader';
import NewPostForm from '../../components/posts/NewPostForm';

export default function Home() {
  return (
    <AuthProtected>
      <Layout
        home
      >
        <div className="container mx-auto py-4" >
          <PageHeader title="Posts"/>
          <NewPostForm/>
        </div>
      </Layout>
    </AuthProtected>
  )
}
