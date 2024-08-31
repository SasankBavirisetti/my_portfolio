import React from 'react'
import './Contact.css'


export const Contact = () => {
  return (
    <div className='contact-page'>
        <div className="contact-heading">Contact Me </div>
       <div className="main">
       <div className="details">
            <div className="text">Email Id : </div>
            <div className="content">sasankbavirisetti@gmail.com</div>
        </div>
        <div className="details">
            <div className="text">Phone Number : </div>
            <div className="content">9392410329</div>
        </div>
       </div>
       {/* <h1 className='or'>(or)  Email Below</h1>

       <form action="" className='form'>
        <input type="email" name="email" placeholder="Enter Your Email Here" className='inp form-email'/>
        <textarea name="" id="" placeholder='Enter here ' className='matter inp'></textarea>
       </form> */}
    </div>
  )
}
