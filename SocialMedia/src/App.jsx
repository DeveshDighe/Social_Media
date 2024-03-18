import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import { Route, Router, Routes } from 'react-router-dom'
import RegisterForm from './Components/RegisterForm.jsx';
import Container from './Components/Container.jsx';
import LoginForm from './Components/Login.jsx';
import SinglePost from './Components/SinglePost.jsx';
import SinglePostDummy from './Components/SinglePostDummy.jsx';




function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/loginForm' element={<LoginForm />} />
        <Route path='/singlePost/:id' element={<SinglePost />} />
        <Route path='/singlePostDummy/:id' element={<SinglePostDummy />} />
      </Routes>


    </>
  )
}

export default App
