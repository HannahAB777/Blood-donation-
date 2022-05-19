import React, { useEffect } from 'react';
import AdminNav from '../Components/AdminNav';
import Footer from '../Components/Footer';

export default function AppLayout(props) {

    useEffect(() => {
      // check if user is login

      // if not kick them out to /login
    
    
    }, []);
    


  return (
    <div>
    
    
    <AdminNav></AdminNav>



    {props.children}
    
    
    <Footer></Footer>
    
    </div>
  )
}
