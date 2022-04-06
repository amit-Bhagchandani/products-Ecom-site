import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

    const Navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            Navigate('/')
        }, 3000)
    },[])

  return (
    <main className='page'>
        <p>Sorry, Page not found</p>
        <p className='light-grey-value'>Redirecting to Home Page...</p>
    </main>
  )
}

export default PageNotFound