import React from 'react'

function FooterDetails({email, phone}) {
  return (
    <div className="w3-padding-16">
      <a className="footer__details w3-hover-gray" href="mailto:"> Email : {email}</a>
      <p className="footer__details ">Phone : {phone}</p>
      <p>&copy;2022 All rights reserved</p>
  </div>
  )
}

export default FooterDetails