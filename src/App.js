import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "../src/pages/Home"
import Form from "../src/pages/Form"
import Success from "../src/pages/Success"
import Error from "../src/pages/Error"

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/success/:name' element={<Success/>}/>
            <Route path='/error' element={<Error/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
