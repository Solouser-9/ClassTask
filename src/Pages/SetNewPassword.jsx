import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Styles/setNewPassword.css'

const SetPassword = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/verify')
  }

  return (
    <div className="set-password-page">
      <div className="set-password-card">
        {/* Left Section (Form Area) */}
        <div className="left-section">
          <div className="Logo">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span className="logo-text">Your Logo</span>
          </div>

          <div className="Header">
            <h2>Set a password</h2>
            <p>Your previous password has been reseted. Please set a new password for your account.</p>
          </div>

          <form className="content" onSubmit={handleSubmit}>
            <div className="input-group password-group">
              <input 
                type={showPassword ? "text" : "password"} 
                id="createPassword" 
                name="createPassword" 
                placeholder="7789BM6X@@H&$K_" 
                required 
              />
              <label htmlFor="createPassword">Create Password</label>
              <button 
                type="button" 
                className="eye-icon-btn" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle Create Password Visibility"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>

            <div className="input-group password-group">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="reEnterPassword" 
                name="reEnterPassword" 
                placeholder="7789BM6X@@H&$K_" 
                required 
              />
              <label htmlFor="reEnterPassword">Re-enter Password</label>
              <button 
                type="button" 
                className="eye-icon-btn" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label="Toggle Re-enter Password Visibility"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Set password
            </button>
          </form>
        </div>

        {/* Right Section (Image Container) */}
        <div className="Image">
          <div className="image-placeholder">
            <img src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop" alt="Set Password Illustration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SetPassword