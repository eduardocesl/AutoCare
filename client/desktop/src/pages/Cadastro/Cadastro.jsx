import { Link } from 'react-router-dom'
import { useRef } from 'react'
import api from '../../services/api'
import styles from './Cadastro.module.css'

function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const senhaRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value
            })
            alert("Usuário cadastrado")
        } catch (err) {
            alert("Erro ao cadastrar usuário")
        }
    }

    return (
        <div className={styles.cadastroContainer}>
            <form onSubmit={handleSubmit} className={styles.cadastroForm}>
                <input ref={nameRef} placeholder="Nome" type="text" className={styles.cadastroInput} />
                <input ref={emailRef} placeholder="E-mail" type="email" className={styles.cadastroInput} />
                <input ref={senhaRef} placeholder="Senha" type="password" className={styles.cadastroInput} />
                <button className={styles.cadastroButton}>Cadastrar</button>
                <Link to="/login" className={styles.loginLink}>Já tem uma conta? Faça login</Link>
            </form>
        </div>
    )
}

export default Cadastro
