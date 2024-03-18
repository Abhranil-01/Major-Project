
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from './Pages/Layout/Layout.jsx'
import {Home,MedicineStore,TestBooking,About} from './Pages/index.js'
import LoginSignup from './Pages/login/LoginSignup.jsx'
import { useSelector } from "react-redux";
import SingleProduct from "./Pages/productpage/SingleProduct.jsx";
import Cart from "./Pages/cart/Cart.jsx";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>} >
       <Route path='' element={<Home/>}/>
       <Route path='BookTest' element={<TestBooking/>}/>
       <Route path='OrderMedichine' element={<MedicineStore/>}/>
       <Route path='/:product/:id' element={<SingleProduct/>}/>
       <Route path='cart' element={<Cart/>}/>
       <Route path='AboutUs' element={<About/>}/>
       <Route path='login' element={<LoginSignup/>}/>
     </Route>
          <Route path="/" element={access_token ? <Home/> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;