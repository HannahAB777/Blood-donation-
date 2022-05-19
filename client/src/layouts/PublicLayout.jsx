import React from 'react';
import PublicNav from '../Components/PublicNav';
import Footer from '../Components/Footer';

export default function PublicLayout(props) {
  return (
    <div>

        <PublicNav></PublicNav>


        {props.children}




        <Footer></Footer>
    
        


    </div>
  )
}
