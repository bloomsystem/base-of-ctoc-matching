import { useRouter } from 'next/router';
import Layout from '../../components/layout'
import PostDetail from '../../components/posts/PostDetail';

const edit = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <Layout
      home
    >
      <div className="container mx-auto py-4" >
        <PostDetail
          postId={postId}
        />
      </div>
    </Layout>
  )
}

export default edit;