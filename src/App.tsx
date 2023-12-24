import { useEffect } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { HomePage, LoginPage } from '@/pages'

function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Router>
    )
}

export default App
