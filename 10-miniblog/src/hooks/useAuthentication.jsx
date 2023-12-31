import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { db } from '../firebase/config'
import { useState, useEffect } from 'react'


export function useAuthentication() {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //clenup
    //deal with memory leak
    const [cancelled, setCanlled] = useState(false)

    const auth = getAuth() //funcao do Firebase para fazer posteriormente a autenticacao 

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(null)
        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)
            return user
        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
            let systemErrorMessage
            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "E-mail já cadastrado"
            } else {
                systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde"
            }
            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    //** logout - sign out */
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    //login
    const login = async (data) => {
        checkIfIsCancelled()
        setLoading(true)
        let systemErrorMessage
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        } catch (error) {
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"
            }  else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Senha inválida"   
            } else{
                systemErrorMessage= "Ocorreu um erro, tenta novamente mais tarde"
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    }

        useEffect(() => {
            return () => setCanlled(true)
        }, [])

        return {
            auth,
            createUser,
            error,
            loading,
            logout, 
            login,
        }

    }