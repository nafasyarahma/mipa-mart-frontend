import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { 
  // common
  HomePage, 
  LoginPage,
  
  // member
  MemberDashboard, 
  ManagementProducts,
  ManagementPaymentMethods,
  ManagementDeliveryMethods,
  AddPaymentMethod,
  AddDeliveryMethod,
  EditDeliveryMethod,
  AddProduct,
  EditProduct,

  // admin
  AdminDashboard,
  CategoriesManagement,
  MembersManagement,
  CustomersManagement, 

} from '../pages'

const Routers = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'         element={ <HomePage/> }/>
        <Route path='/login'    element={ <LoginPage/> }/>

        <Route path='/member/dashboard' element={ <MemberDashboard/>}/>
        <Route path='/member/products'    element={ <ManagementProducts/>}/>
        <Route path='/member/product/add'    element={ <AddProduct/>}/>
        <Route path='/member/product/edit'    element={ <EditProduct/>}/>
        <Route path='/member/payment-methods'    element={ <ManagementPaymentMethods/>}/>
        <Route path='/member/payment-method/add'    element={ <AddPaymentMethod/>}/>
        <Route path='/member/delivery-methods'    element={ <ManagementDeliveryMethods/>}/>
        <Route path='/member/delivery-method/add'    element={ <AddDeliveryMethod/>}/>
        <Route path='/member/delivery-method/edit'    element={ <EditDeliveryMethod/>}/>

        <Route path='/admin/dashboard'  element={ <AdminDashboard/>}/>
        <Route path='/admin/categories'  element={ <CategoriesManagement/>}/>
        <Route path='/admin/members'  element={ <MembersManagement/>}/>
        <Route path='/admin/customers'  element={ <CustomersManagement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers