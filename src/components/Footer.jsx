import React from 'react'
import logo from '../assets/logo.svg';
import JoinWaitList from './JoinWaitList';

const Footer = () => {
  return (
    <footer>
        <JoinWaitList/>
        <div className='p-10  pb-32 text-primary md:flex md:justify-between'>
        <div>
            <img src={logo} alt="Logo" className="w-32 pb-4" />
            <p className='text-xs'>2024 Fuild Ai</p>
        </div>
        <div className='text-sm flex space-x-28'>
            <div className='flex flex-col space-y-2'>
                <p>Our features</p>
                <p>Areas</p>
                <p>FAQS</p>
                <p>The Whitelist</p>
                <p>Contact us</p>
            </div>
            <div >
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer