import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AllProduct from "./components/All/AllProduct.jsx";
import Home from "./components/Home/Home"
import Category from "./components/Category/Category.jsx";
import SingleProduct from "./components/SingleProduct/SingleProduct"
import Newsletter from "./components/Footer/Newsletter/Newsletter"
import AppContext from "./Utilis/Context.js"
import Heat from "./components/Heart/Heat.jsx"
import All from "./components/All/AllProduct.jsx"
import Contact from "./components/Header/Contact/Contact";




function App() {
    return(
        <BrowserRouter>
        <AppContext>
        <Header/>
            <Routes>
            <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/all" element={< AllProduct/>} />
                    <Route path="/wistlist" element={<Heat/>}/>
                    <Route path="/contact_us" element={<Contact/>}/>

                    
            </Routes>
            <Newsletter/>
            <Footer/>   
        </AppContext>
        </BrowserRouter>
    )
}

export default App;
