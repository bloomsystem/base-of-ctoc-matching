import { useRouter } from 'next/router';
import AuthProtected from '../../components/authProtected'
import Layout from '../../components/layout'
import PostDetail from '../../components/posts/PostDetail';

const edit = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <AuthProtected>
      <Layout
        home
      >
        <div className="container mx-auto py-4" >
          <PostDetail
            postId={postId}
          />
        </div>
      </Layout>
    </AuthProtected>
  )
}

export default edit;