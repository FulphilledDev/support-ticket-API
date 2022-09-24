import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


export const useAuthStatus = () => {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    
    // Getting the user through redux from node express app (backend)
    const { user } = useSeleector((state) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
        setCheckingStatus(false)
    }, [user])

    return { loggedIn, checkingStatus }
}

