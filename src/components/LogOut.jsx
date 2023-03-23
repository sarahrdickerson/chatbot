import React from 'react'
import { auth } from '../firebase'

const logOutStyles = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
}

const LogOut = () => {
    const signOut = () => {
        signOut(auth)
    }
    
    return (
        <button className={logOutStyles.button} onClick={() => auth.signOut()}>
            Log Out
        </button>
    )
}

export default LogOut