import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, MemberDashboard, AdminDashboard } from '../pages'

const Routers = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'         element={ <HomePage/> }/>
        <Route path='/login'    element={ <LoginPage/> }/>
        <Route path='/member/dashboard' element={ <MemberDashboard/>}/>
        <Route path='/admin/dashboard'  element={ <AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers