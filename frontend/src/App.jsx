
import React from 'react'
import AuthRouter from './routers/AuthRouter'
import './features/shared/style.scss'
import { AuthProvider } from './features/auth/authContext.jsx'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AuthRouter/>
      </AuthProvider>
    </div>
  )
}

export default App
