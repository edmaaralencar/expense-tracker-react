import { Outlet } from 'react-router-dom'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Sidebar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Dashboard
