import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { 
  // common
  CatalogPage, 
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
  EditProfileMember,
  EditCustomer,
  RegisterMemberPage,
  RegisterCustomerPage,
  ChooseRole,
  ForgotPasswordPage,
  ResetPasswordPage,

  // customer
  CartPage,
  DetailProduct,
  CheckoutPage,
  CustomerOrderPage,
} from '../pages'

const Routers = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'         element={ <CatalogPage/> }/>
        <Route path='/login'    element={ <LoginPage/> }/>
        <Route path='/member/register'    element={ <RegisterMemberPage/> }/>
        <Route path='/customer/register'    element={ <RegisterCustomerPage/> }/>
        <Route path='/choose-role'    element={ <ChooseRole/> }/>
        <Route path='/forgot-password'    element={ <ForgotPasswordPage/> }/>
        <Route path='/reset-password'    element={ <ResetPasswordPage/> }/>

        <Route path='/member/dashboard' element={ <MemberDashboard/>}/>
        <Route path='/member/products'    element={ <ManagementProducts/>}/>
        <Route path='/member/product/add'    element={ <AddProduct/>}/>
        <Route path='/member/product/edit'    element={ <EditProduct/>}/>
        <Route path='/member/payment-methods'    element={ <ManagementPaymentMethods/>}/>
        <Route path='/member/payment-method/add'    element={ <AddPaymentMethod/>}/>
        <Route path='/member/delivery-methods'    element={ <ManagementDeliveryMethods/>}/>
        <Route path='/member/delivery-method/add'    element={ <AddDeliveryMethod/>}/>
        <Route path='/member/delivery-method/edit'    element={ <EditDeliveryMethod/>}/>
        <Route path='/member/profil/edit'    element={ <EditProfileMember/>}/>

        <Route path='/customer/cart'    element={ <CartPage/>}/>
        <Route path='/customer/checkout'    element={ <CheckoutPage/>}/>
        <Route path='/customer/order'    element={ <CustomerOrderPage/>}/>
        <Route path='/detail'    element={ <DetailProduct/>}/>

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