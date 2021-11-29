import Layout from '../components/layout'
import {NotificationList} from '../components/notifications/notificationList'
import AuthProtected from '../components/authProtected'
import PageHeader from '../components/parts/PageHeader';


const Index = () => {
  return (
    <AuthProtected>
      <Layout
        home
      >
        <div className="container mx-auto py-4" >
          <PageHeader title="DashBoard"/>
          <div className="md:flex md:space-x-4 my-2">
            <div className="container mx-auto py-4" >
              <h1>お知らせ</h1>
              <NotificationList/>
            </div>
          </div>
        </div>
      </Layout>
    </AuthProtected>
  )
}
  export default Index