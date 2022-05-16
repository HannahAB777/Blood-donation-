import React, { useEffect } from 'react'

export default function AppLayout(props) {

    useEffect(() => {
      // check if user is login

      // if not kick them out to /login
    
    
    }, []);
    


  return (
    <div>
    
    
    <h1>App Navbar</h1>



    {props.children}
    
    
    
    
    </div>
  )
}
