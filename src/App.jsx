import { useState } from 'react'

import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'login' ? 'active' : ''}`} 
              id="tab-login" 
              onClick={() => handleTabChange('login')}
              role="tab"
              aria-controls="pills-login" 
              aria-selected={activeTab === 'login'}
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'register' ? 'active' : ''}`} 
              id="tab-register" 
              onClick={() => handleTabChange('register')}
              role="tab"
              aria-controls="pills-register" 
              aria-selected={activeTab === 'register'}
            >
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === 'login' ? 'show active' : ''}`} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                {/* Aggiungi qui i tuoi bottoni per i social media */}
              </div>

              <p className="text-center">or:</p>

              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">Email or username</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" className="form-control" />
                <label className="form-label" htmlFor="loginPassword">Password</label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

              <div className="text-center">
                <p>Not a member? <a href="#!">Register</a></p>
              </div>
            </form>
          </div>
          {/* Qui va il contenuto per il tab di registrazione */}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
