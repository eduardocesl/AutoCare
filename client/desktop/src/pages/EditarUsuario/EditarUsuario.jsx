import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import styles from './EditarUsuario.module.css';

function EditarUsuario() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const senhaRef = useRef();
    const [carregando, setCarregando] = useState(true);
    const [userId, setUserId] = useState(null); // Armazenar o ID do usuário

    useEffect(() => {
        async function carregarDados() {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    alert('Você precisa estar autenticado para acessar essa página.');
                    navigate('/login');
                    return;
                }
    
                const resposta = await api.get(`/me`, { 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
    
                const { name, email, id } = resposta.data; 
                setUserId(id);
                nameRef.current.value = name;
                emailRef.current.value = email;
                setCarregando(false);
            } catch (err) {
                console.error('Erro ao carregar dados do usuário:', err);
                alert('Erro ao carregar os dados do usuário.');
                setCarregando(false);
            }
        }
    
        carregarDados();
    }, [navigate]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token || !userId) {
                alert('Você precisa estar autenticado para realizar essa ação.');
                return;
            }

            await api.put(`/usuarios/${userId}`, {
                name: nameRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert('Informações atualizadas com sucesso.');
            navigate('/perfil');
        } catch (err) {
            console.error('Erro ao atualizar usuário:', err);
            alert('Erro ao atualizar informações.');
        }
    }

    async function handleDelete() {
        const confirmDelete = window.confirm('Você tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.');
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem('token');
            if (!token || !userId) {
                alert('Você precisa estar autenticado para realizar essa ação.');
                return;
            }

            await api.delete(`/usuarios/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            alert('Usuário excluído com sucesso.');
            localStorage.removeItem('token'); // Opcional: remove o token do localStorage
            navigate('/login'); // Redireciona para a página de login
        } catch (err) {
            console.error('Erro ao excluir usuário:', err);
            alert('Erro ao excluir usuário.');
        }
    }

    if (carregando) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={styles.editarContainer}>
            <form onSubmit={handleSubmit} className={styles.editarForm}>
                <input ref={nameRef} placeholder="Nome" type="text" className={styles.editarInput} />
                <input ref={emailRef} placeholder="E-mail" type="email" className={styles.editarInput} />
                <input ref={senhaRef} placeholder="Senha" type="password" className={styles.editarInput} />
                <button className={styles.editarButton}>Salvar Alterações</button>
            </form>
            <button onClick={handleDelete} className={styles.deletarButton}>Excluir Conta</button>
        </div>
    );
}

export default EditarUsuario;
