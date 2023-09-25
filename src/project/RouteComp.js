import React from 'react'
import Home from './Home'
import Bollywood from './Bollywood'
import Contact from './Technology'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LinkCompo from './LinkCompo'
import Hollywood from './Hollywood'
import ContextAPI from './ContextAPI'
import Fitness from './Fitness'
import Food from './Food'
import Detail from './Detail'
import Technology from './Technology'
function RouteComp() {
  return (
    <div>
      <BrowserRouter>
      
      
        <ContextAPI>                                                  
      <Routes>
        <Route path='/' element={<><LinkCompo/><Home/></>}/>
        <Route path='/bollywood' element={<><LinkCompo/><Bollywood/></>}/>
        <Route path='/technology' element={<><LinkCompo/><Technology/></>}/>
        <Route path='/hollywood' element={<><LinkCompo/><Hollywood/></>}/>
        <Route path='/fitness' element={<><LinkCompo/><Fitness/></>}/>
        <Route path='/contact' element={<><LinkCompo/><Contact/></>}/>
        <Route path='/food' element={<><LinkCompo/><Food/></>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </ContextAPI>
      </BrowserRouter>
    </div>
  )
}

export default RouteComp
