import React, { useState } from 'react'
import './login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'


const Loginsignup = () => {

    const [action,setAction] = useState('login');
        
  return (
    <div>
        <div className='container'>
            <div className='header'>
                <div className='text'>
                    {action}
                </div>
                <div className='underline'>
                </div>
            </div>
            <div className='inputs'>
                {action === 'login' ?<div></div> : <div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action === 'signup' ? <div></div> : <div className='forgot-password'>
                Forgot Password? <span>Click here</span>
            </div>}
            
            <div className='submit-container'>
                <div className={action === 'login' ? 'submit gray' : 'submit'} onClick={()=>{setAction('signup')}}>Sign up</div>
                <div className={action === 'signup' ? 'submit gray' : 'submit'} onClick={()=>{setAction('login')}}>Login</div>
            </div>
        </div>        

    </div>
  )
}

export default Loginsignup
