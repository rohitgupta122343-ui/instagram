import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const ProtectedRoute = ({ children }) => {

   const [loading, setLoading] = useState(true)
   const [isAuth, setIsAuth] = useState(false)

   useEffect(() => {

      axios.get('https://instagram-y4ln.onrender.com/api/auth/get-me', {
         withCredentials: true
      })
      .then(() => {
         setIsAuth(true)
      })
      .catch(() => {
         setIsAuth(false)
      })
      .finally(() => {
         setLoading(false)
      })

   }, [])

   if (loading) {
      return <h1>Loading...</h1>
   }

   if (!isAuth) {
      return <Navigate to="/login" />
   }

   return children
}

export default ProtectedRoute