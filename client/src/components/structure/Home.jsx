import React from 'react'
import Middlepart from './Middlepart';
import Footer from './Footer'
import RArrow from '../structure/arrrowrotate.svg'

const Home = () => {
  return (
    <div>
    <Middlepart className="overflow-hidden" />
      <div className='md:hidden overflow-hidden text-[28px] font-[Optima] uppercase mx-6 mt-[-1000px] md:mt-0'>
        <p>Curious about what </p>
        <p>we can do for you? </p>
        <p className='underline inline-flex'>Let's talk <img src={RArrow} alt="rotateArrow" className='mx-2' />
        </p>
      </div>
      <Footer className="overflow-hidden" />
    </div>
  )
}

export default Home