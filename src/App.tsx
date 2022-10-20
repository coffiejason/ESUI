import { LandingPage, ProductPage } from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<LandingPage />}/>
          <Route path={'/product'} element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
