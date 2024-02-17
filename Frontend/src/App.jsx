import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './paginas/index';
import Sobremi from './paginas/sobremi'
import ErrorPagina from './paginas/error'
import Secciones from './paginas/secciones'
import Subsecciones from './paginas/subsecciones'

export default function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />}/>
          <Route path='/index' element={<Index />}/>
          <Route path='/sobremi' element={<Sobremi />}/>
          <Route path='/sobremi' element={<Sobremi />}/>
          <Route path='/secciones' element={<Secciones />}/>
          <Route path='/subsecciones' element={<Subsecciones />}/>
          <Route path='*' element={<ErrorPagina />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
