
import Header from '../layout/Header/Header'
import { Routes, Route,Navigate } from "react-router-dom";
import Home from '../pages/Home/Home'
import SearchResult from '../pages/SearchResult/SearchResult'
import ProductsDetail from '../pages/ProductDetail/ProductsDetail'
import ShoppingChart from '../pages/ShoppingChart/ShoppingChart'
import Checkout from '../pages/Checkout/Checkout'
import Payment from '../pages/Payment/Payment'
import NotFound from '../components/NotFound'
import Footer from '../layout/Footer'
import { useSelector } from 'react-redux';

const RoutesMain = () => {

    const {  token } = useSelector(
        (state) => state.auth
      );
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<SearchResult />} />
     

      <Route path="/:ctg/:search" element={<SearchResult />} />

    
      <Route path="/:ctg/:ctgId/:name/:id" element={<ProductsDetail />} />

      <Route path="/shoppingChart" element={<ShoppingChart />} />
      <Route path="/checkout" element={token?  <Checkout /> : <Navigate to={"/"} /> } />
      <Route path="/payment" element={<Payment /> } />
      

     
      <Route path="*" element={<NotFound /> } />

      
    </Routes>
    <Footer />
    {/* <Footer /> */}
  </> 
  )
}

export default RoutesMain