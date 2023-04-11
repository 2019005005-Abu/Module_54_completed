import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
const Home = () => {
  const LoadingMesage=<span>Data Is Loading...</span>
  const navigation=useNavigation();
  return (
    <div>
     <Header></Header>
       {navigation.state==='loading' && LoadingMesage}
      <Outlet></Outlet>
    </div>
  )
}

export default Home
