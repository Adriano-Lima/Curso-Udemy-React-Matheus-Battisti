import { useState, useEffect } from 'react'
import { useAuthentication } from '../hooks/useAuthentication'
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom"

const Login = () => {
  //** dados do formulario */
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState("")

  const { error: authError, loading, login } = useAuthentication()

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      email,
      password
    }

    const resp = await login(user)

    console.log(resp)
  }

  //fica escutando se authError foi modificado 
  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.logar}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder='E-mail do usuário' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" onChange={e => setPassword(e.target.value)} value={password} required placeholder='Insira sua senha' />
        </label>
        {!loading && <button className='btn'>Logar</button>}
        {loading && <button className='btn' disabled>Aguarde ...</button>}
        {error && <p className='error'> {error} </p>}
      </form>
    </div>
  )
}

export default Login