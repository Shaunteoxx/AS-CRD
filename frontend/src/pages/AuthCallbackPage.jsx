import { useNavigate } from 'react-router-dom'
import AuthCallback from '../components/AuthCallback'

export default function AuthCallbackPage() {
  const navigate = useNavigate()

  const handleSuccess = () => {
    const redirect = sessionStorage.getItem('auth_redirect') || '/crd'
    sessionStorage.removeItem('auth_redirect')
    navigate(redirect, { replace: true })
  }

  const handleError = () => {
    const redirect = sessionStorage.getItem('auth_redirect') || '/crd'
    sessionStorage.removeItem('auth_redirect')
    navigate(redirect, { replace: true })
  }

  return <AuthCallback onSuccess={handleSuccess} onError={handleError} />
}
