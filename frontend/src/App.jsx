
import React from 'react'
import AuthRouter from './routes/AuthRouter'
import { AuthProvider } from './features/auth/authContext'
import { PostContextProvider } from './features/post/PostContext'
import './features/shared/styel.scss'
const App = () => {
  return (
    <div>
      <AuthProvider>
        <PostContextProvider>
        <AuthRouter/>

        </PostContextProvider>
      </AuthProvider>
    </div>
  )
}

export default App
