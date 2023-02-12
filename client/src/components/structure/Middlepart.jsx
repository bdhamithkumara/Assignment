import React from 'react'
import GetinTouch  from '../../components/GetIntouch'
import ContactForm from '../../components/ContactForm'

const Middlepart = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row '>
      <div className='w-1/2 md:visible invisible '>
        <GetinTouch className="" />
      </div>
      <div className=''>
        <ContactForm />
      </div>
    </div>
  )
}

export default Middlepart