import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Favoritos from './pages/Favoritos'
import Filme from './pages/Filme'
import Error from './pages/Error'

function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp