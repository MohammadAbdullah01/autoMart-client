import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Purchase from "./Pages/Home/Purchase";
import Navbar from "./Pages/Shared/Navbar";
import RequireAuth from "./Pages/Shared/RequireAuth";
import SignIn from "./Pages/Shared/SignIn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import Orders from "./Pages/Dashboard/Orders";
import Review from "./Pages/Dashboard/Review";
import Profile from "./Pages/Dashboard/Profile";
import SignUp from "./Pages/Shared/SignUp";
import NotFound from "./Pages/Shared/NotFound";
import Footer from "./Pages/Shared/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Payment from "./Pages/Dashboard/Payment";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import RequireAdmin from "./Pages/Shared/RequireAdmin";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <>
      <div className='max-w-7xl	mx-auto px-2 md:px-10'>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='signin' element={<SignIn></SignIn>}></Route>
          <Route path='signup' element={<SignUp></SignUp>}></Route>
          <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Orders></Orders>}></Route>
            <Route path='review' element={<Review></Review>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
            <Route path='users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='manageorders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
            <Route path='manageproducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
          </Route>
          <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer />

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
