import React from 'react'
import FooterTop from '../FooterTop'
import FooterBottom from '../FooterBottom'

const Footer = ({FooterLinks}) => {
  return (
    <div>
      <div>
        <FooterTop />
      </div>
      <div>
        <FooterBottom/>
      </div>
    </div>
  )
}

export default Footer