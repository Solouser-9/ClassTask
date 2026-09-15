import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/verifyCode.css'

const VerifyCode = () => {
  const navigate = useNavigate()
  const [showCode, setShowCode] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className="verify-code-page">
      <div className="verify-code-card">
        {/* Left Section (Form Area) */}
        <div className="left-section">
          <div className="Logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span className="logo-text">Your Logo</span>
          </div>

          <div className="back-to-login" onClick={() => navigate('/login')}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to login
          </div>

          <div className="Header">
            <h2>Verify code</h2>
            <p>An authentication code has been sent to your email.</p>
          </div>

          <form className="content" onSubmit={handleSubmit}>
            <div className="input-group password-group">
              <input 
                type={showCode ? "text" : "password"} 
                id="code" 
                name="code" 
                defaultValue="7789BM6X" 
                required 
              />
              <label htmlFor="code">Enter Code</label>
              <button 
                type="button" 
                className="eye-icon-btn" 
                onClick={() => setShowCode(!showCode)}
                aria-label="Toggle Code Visibility"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {showCode ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            <p className="resend-text">
              Didn't receive a code? <span className="link-btn">Resend</span>
            </p>

            <button type="submit" className="submit-btn">
              Verify
            </button>
          </form>
        </div>

        {/* Right Section (Image Container) */}
        <div className="Image">
          <div className="image-placeholder">
            <img src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop" alt="Verify Code Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyCode