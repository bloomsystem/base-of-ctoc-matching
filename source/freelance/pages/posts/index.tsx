import Layout from '../../components/layout'
import {PostList} from '../../components/posts/postList'

import Button from '../../components/parts/Button';
import PageHeader from '../../components/parts/PageHeader';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter(); 

  return (
    <Layout
      home
    >
      <div className="container mx-auto py-4" >
        <PageHeader title="Posts"/>
        <div className="block px-4 py-2 text-right" >
          <Button
              text="新規登録"
              action={() => { router.push("/posts/new")}}
          />
        </div>
        <PostList/>
      </div>
    </Layout>
  )
}
