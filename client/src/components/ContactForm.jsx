import React from 'react'
import { checklist } from '../constants/index'

const ContactForm = () => {
  return (
    <div className='md:bg-[#192240] w-auto h-auto bg-white'>
        <div className='uppercase text-black md:text-white md:text-[40px] text-[28px] pt-10 pl-8 pb-5 font-Optima '>
          <h1 className=''>Talk to Our realestate</h1>
          <h1>experts</h1>
        </div>
        <div>
          <p className='md:text-[#A2A8BE] pl-8 md:w-[500px] md:text-[13px] text-[16px] pb-5 text-black'>
          So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order typesetter likely
          </p>
        </div>
        <div className='pb-5'>
        <form class="w-full pr-8 pl-8">

        <div className=''>
        <input class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none" type="text" placeholder="Your Name *"  />
        <input class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none" type="text" placeholder="Your Phone number *"  />
        <input class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black mb-5  leading-tight focus:outline-none" type="email" placeholder="Your Email Address"  />
        <input class="appearance-none bg-transparent border-b-2 border-black md:border-[#A2A8BE] w-full md:text-[#A2A8BE] text-black pb-8  leading-tight focus:outline-none" type="text" placeholder="Your Question*"  />
        </div>

        <div>
        <p className='md:text-[#A2A8BE] text-black mt-5 cursor-pointer'>How can we help?</p>
        </div>

        <div className='mt-5 '>
          {checklist.map((id,index)=>(
            <div className='flex items-center mb-4' key={id}>
                <input type="checkbox" className='w-4 h-4 text-transparent bg-transparent border-white rounded ' />
                <label className='md:text-[#A2A8BE] text-black pl-2'>{id.text}</label>
            </div>
          ))}
        </div>
            <div className='mt-2 mb-2'>
              <button className='md:text-[#213065] text-white bg-[#213065]  md:bg-white h-10 w-full'>Submit</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default ContactForm