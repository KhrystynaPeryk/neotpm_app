import React, { useRef, useState } from 'react'
import './Admin.scss'
import LeadsPage from './components/LeadsPage/LeadsPage';

const Admin = () => {
    const userNameRef = useRef(null);
    const passwordRef = useRef(null);

    const [isAdminLogged, setIsAdminLogged] = useState(false)
    const [showError, setShowError] = useState(false)

    const verifyCredentials = (username, password) => (username === 'admin' && password === '123456')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (verifyCredentials(userNameRef.current.value, passwordRef.current.value)) {
            setShowError(false)
            setIsAdminLogged(verifyCredentials(userNameRef.current.value, passwordRef.current.value))
        } else {
            setShowError(true)
        }
    }

    return (
        <div className='adminContainer'>
            {
                isAdminLogged ? <LeadsPage /> :
                (
                    <form className='form' onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" required ref={userNameRef}/>
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" name="password" required ref={passwordRef} />
                        </p>
                        {showError && <div className='adminError'>Incorrect credentials</div>}
                        <button type='submit'>Log in</button>
                    </form>
                )
            }
        </div>
    )
}

export default Admin