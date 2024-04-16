import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import { AuthenticationTitle } from './Components/LoginPage/AuthenticationTitle';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';


function App() {
    const theme = createTheme({
        /** Put your mantine theme override here */
      });
    return (
        <MantineProvider theme={theme}>
            <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/bicycle' element={<ShopCategory banner={men_banner} category="bicycle" />} />
                    <Route path='/mattresses' element={<ShopCategory banner={women_banner} category="mattresses" />} />
                    <Route path='/electronics' element={<ShopCategory banner={kid_banner} category="electronics" />} />
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<AuthenticationTitle/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
        </MantineProvider>
        
    );
}

export default App;
