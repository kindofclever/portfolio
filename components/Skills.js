import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className ='ml-5 sm:ml-1 w-full lg:h-screen p-2'>
        <div className ='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-[#0077B6] uppercase text-xl tracking-widest'>Skills</p>
            <h2 className='text-[#ffbf00] font-bold'>What can I do for you?</h2>
            <div className=' mt-5 sm:mr-5 md:mr-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/html.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/css.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/javascript.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/node.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/react.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/next.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/mongo.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/github.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='bg-white p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-30'>
                    <div className='grid grid-cols-2 justify-center gap-4 items-center'>
                        <div className='m-auto'>
                            <Image alt='company icon' src='/../public/assets/skills/aws.png' width='64' height='64'/>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills