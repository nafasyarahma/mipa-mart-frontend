import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { 
  HomePage, 
  LoginPage, 
  MemberDashboard, 
  ProductsManagement,
  PaymentMethodManagement,
  DeliveryMethodManagement,
  AdminDashboard,
  CategoriesManagement,
  MembersManagement,
  CustomersManagement 
} from '../pages'

const Routers = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'         element={ <HomePage/> }/>
        <Route path='/login'    element={ <LoginPage/> }/>
        <Route path='/member/dashboard' element={ <MemberDashboard/>}/>
        <Route path='/member/products'    element={ <ProductsManagement/>}/>
        <Route path='/member/payment-methods'    element={ <PaymentMethodManagement/>}/>
        <Route path='/member/delivery-methods'    element={ <DeliveryMethodManagement/>}/>
        <Route path='/admin/dashboard'  element={ <AdminDashboard/>}/>
        <Route path='/admin/categories'  element={ <CategoriesManagement/>}/>
        <Route path='/admin/members'  element={ <MembersManagement/>}/>
        <Route path='/admin/customers'  element={ <CustomersManagement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers