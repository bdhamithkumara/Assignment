import React from 'react'
import { Logo } from '../assets'
import { SocialMediadark , FooterLinks1, FooterLinks2,FooterLinks3 } from "../constants/index"

const FooterTop = () => {
  return (
    <div className='mx-6 py-10 text-center md:text-left'>
      <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        <div className=''>
          <div>
            <img src={Logo} alt='logo'/>
          </div>
          <div>
            <p>
            So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order typesetter likely
            </p>
          </div>
          <div className='flex pt-5'>
            {SocialMediadark.map((id,index) => (
              <div key={id}>
                <img src={id.imgl} alt="socialicon" className='bg-black rounded-full w-8 h-8 mx-3'/>
              </div>
            ))}
          </div>
        </div>


      <div className='uppercase mx-auto'>
        <h6 className='font-Optima my-3 font-bold'>  nevigation </h6>
              {FooterLinks1.map((id,index) => (
                <div key={id}>
                  <p className='my-3 font-Lato'>{id.name}</p>
                </div>
              ))}
      </div>

      <div className='uppercase  mx-auto'>
        <h6 className='font-Optima my-3 font-bold'>  Company </h6>
              {FooterLinks2.map((id,index) => (
                <div key={id}>
                  <p className='my-3 font-Lato'>{id.name}</p>
                </div>
              ))}
      </div>

      <div className=' mx-auto'>
        <h6 className='font-Optima my-3 font-bold uppercase'>  contact info </h6>
              {FooterLinks3.map((id,index) => (
                <div key={id}>
                  <div className='flex flex-row space-x-10'>
                    <div>
                      <img src={id.imglnk} alt="imgcontcat" className='bg-[#192240] w-[50px] h-[50px]'/>
                    </div>
                    
                    <div>
                     <p></p>
                    </div>
                  </div>
                </div>
              ))}
      </div>
      </div>
    </div>
  )
}

export default FooterTop