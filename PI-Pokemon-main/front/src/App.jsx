import { LandingPage, Nav, Detail, Form, Home} from './components/index'
import { Route, Routes, useLocation } from 'react-router-dom'
import {  useDispatch } from 'react-redux'
import './App.css'
import { getByName, removeByName } from './redux/actions/actions'

function App() {
  const dispatch = useDispatch();

  const onSearch = (name) => {
      dispatch(getByName(name))
  }

  let onClose = (name) => {
    dispatch(removeByName(name))
  }

 return (
  <div className='app'>
    <Nav onSearch={onSearch}/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home onClose={onClose}/>}/>
      <Route path='/detail/:name' element={<Detail/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
  </div>
 )
}

export default App
