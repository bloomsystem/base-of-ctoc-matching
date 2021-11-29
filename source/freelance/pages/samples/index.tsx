import AuthProtected from '../../components/authProtected'
import Layout from '../../components/layout'
import Button from '../../components/parts/Button';
import Mordal from '../../components/parts/modal';
import { useState } from 'react';
import PageHeader from '../../components/parts/PageHeader';


export default function Home() {

  const [modal, setModal] = useState(false)

  return (
    <AuthProtected>
      <Layout
        home
      >
        <div className="container mx-auto py-4" >
          <PageHeader title="Samples"/>
          <div className="block px-4 py-2 text-right" >
            <Button
                text="modal sample"
                action={() => { setModal(!modal)}}
            />
          </div>

          <Mordal
            isShow={modal}
            close={() => {setModal(!modal)}}
          />

        </div>
      </Layout>
    </AuthProtected>
  )
}
