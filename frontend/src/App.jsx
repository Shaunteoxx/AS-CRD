import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CRDPage from './pages/CRDPage'
import AuthCallbackPage from './pages/AuthCallbackPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CRDPage />} />
        <Route path="/crd" element={<Navigate to="/" replace />} />
        <Route path="/brd" element={<Navigate to="/" replace />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
