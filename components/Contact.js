import React from 'react';
import { IoLogoLinkedin, IoMdMail } from 'react-icons/io';
import { ImGithub } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Contact = () => {
       
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });
        await fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData),
        })
        
        setTimeout(()=> router.push('/thankyou'), 300);
    };

    return (
        <div id='contact'className='w-full lg:h-screen pt-8'>
            <div className='max-w-[1240px] m-auto ml-5 px-2 py-16 w-full'>
                <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Contact</p>
                <h2 className='text-[#ffbf00] font-bold mt-3'>Do you want to send me a message?</h2>
                <div className='grid lg:grid-cols-5 gap-8 mt-5'>
                    <div className='col-span-3 lg:col-span-2 mr-5 h-full shadow-xl rounded-xl p-3 bg-white'>
                        <div className='h-full lg:p-4 flex flex-col justify-center items-center'>
                            <div>
                                <img
                                    src='https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' 
                                    alt='contact'
                                    className='rounded-xl hover:scale-105 ease-in duration-300 xs:mr-5 sm:mr-5 md:mr-5' />
                            </div>
                            <div>
                                <div className='flex items-center justify-between pt-6'>
                                    <a href='https://www.linkedin.com/in/sandragufler/'>
                                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2 mx-4 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                                            <IoLogoLinkedin size={30}/>
                                        </div>
                                    </a>
                                    <a href='https://github.com/kindofclever'>
                                        <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2  mx-4 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                                            <ImGithub size={30} />
                                        </div>
                                    </a>
                                    <a href='https://www.codewars.com/users/kindofclever'>
                                    <div className='text-[#0077B6] bg-[#ffbf00] hover:bg-gradient-to-l from-[#FF8500] to-[#ffbf00] p-2  mx-4 m-1 rounded-full shadow-xl cursor-pointer hover:scale-[105%] ease-in duration-50'>
                                        <SiCodewars size={30} />
                                    </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 mr-5 h-auto shadow-xl rounded-xl lg:p-4 bg-white'>
                        <div className='p-3'>
                            <form method='post' onSubmit={handleSubmit}>
                                <div className='grid md:grid-cols-2 gap-1 w-full pt-1'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2' htmlFor='name'>Name</label>
                                        <input name='name' type="text" required className='border-2 rounded-xl p-3 w-full flex border-[#0096C7]'/>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'  htmlFor='phone' >Phone number</label>
                                        <input name='phone' type="text" className='border-2 rounded-xl p-3 w-full flex border-[#0096C7]'/>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2' htmlFor='email'>E-Mail</label>
                                    <input name='email' type='email' required className='border-2 rounded-xl p-3 w-full flex border-[#0096C7]'/>
                                </div>
                                <div className='flex flex-col mb-5'>
                                    <label className='uppercase text-sm py-2' htmlFor='message'>Message</label>
                                    <textarea name='message' required rows='4' className='border-2 rounded-xl p-3 w-full flex border-[#0096C7]'/>
                                </div>
                                <button type='submit' className='w-full p-4 text-white bg-[#ffbf00] lg:mt-5 hover:scale-[103%] duration-200'>Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center pt-12' >
                    <Link href='/'>
                        <div className='text-[#0077B6] p-2 m-1  cursor-pointer hover:scale-[105%] ease-in duration-200'>
                            <FaAngleDoubleUp size={35}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact