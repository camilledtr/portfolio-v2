import React from 'react'

import Footer from '../../pages/parts/Footer'

const Page = ({ children }) => {
  return (
    <>

      {children}
      <Footer />
    </>
  )
}

export default Page