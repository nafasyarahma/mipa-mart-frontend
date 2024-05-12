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
  ManagementCategories,
  ManagementMembers,
  ManagementCustomers, 
  AddCategory,
  EditCategory,
  EditMember,
  EditCustomer,
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
        <Route path='/admin/categories'  element={ <ManagementCategories/>}/>
        <Route path='/admin/category/add'  element={ <AddCategory/>}/>
        <Route path='/admin/category/edit'  element={ <EditCategory/>}/>
        <Route path='/admin/members'  element={ <ManagementMembers/>}/>
        <Route path='/admin/member/edit'  element={ <EditMember/>}/>
        <Route path='/admin/customers'  element={ <ManagementCustomers/>}/>
        <Route path='/admin/customer/edit'  element={ <EditCustomer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers