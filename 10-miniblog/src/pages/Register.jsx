import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import styles from './Register.module.css'
import { useNavigate } from "react-router-dom"

const Register = () => {
    //** dados do formulario */
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        const user = {
            displayName,
            email,
            password
        }
        if (password != confirmPassword) {
            setError("As senhas precisam ser iguais")
            return
        }
        const resp = await createUser(user)
        
        navigate("/home")
        
        console.log(resp)
    }

    //fica escutando se authError foi modificado 
    useEffect(() => {
        if(authError){
            setError(authError)
        }
    }, [authError])

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)} required placeholder='Nome do usuário' />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='E-mail do usuário' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} required placeholder='Insira sua senha' />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder='Confirme a sua senha' />
                </label>
               {!loading &&  <button className='btn'>Cadastrar</button>}
               {loading &&  <button className='btn' disabled>Aguarde ...</button>}
                {error && <p className='error'> {error} </p>}
            </form>
        </div>
    )
}

export default Register