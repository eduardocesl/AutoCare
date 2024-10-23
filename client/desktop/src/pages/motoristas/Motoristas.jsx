import { useState, useEffect } from 'react';
import axios from 'axios';

const Motoristas = () => {
  const [motoristas, setMotoristas] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    cnh: '',
    telefone: '',
    dataNascimento: '',
    status: 'ATIVO',
  });

  // buscar motoristas
  const fetchMotoristas = async () => {
    try {
      const response = await axios.get('http://localhost:3000/motoristas');
      setMotoristas(response.data);
    } catch (error) {
      console.error('Erro ao buscar motoristas:', error);
    }
  };

  // atualiza a lista de motoristas
  useEffect(() => {
    fetchMotoristas();
  }, []);

  // atualiza os campos do form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // envia o form de cadastro
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDataNascimento = new Date(formData.dataNascimento).toISOString();
    const formattedFormData = {
      ...formData,
      dataNascimento: formattedDataNascimento,
    };
    try {
      await axios.post('http://localhost:3000/motoristas', formattedFormData);
      setFormData({ nome: '', cnh: '', telefone: '', dataNascimento: '', status: 'ATIVO' });
      fetchMotoristas(); // Atualiza a lista após o cadastro
    } catch (error) {
      console.error('Erro ao cadastrar motorista:', error);
    }
  };

    // Estilos embutidos para simplificar
    const styles = {
      form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
      },
      input: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      },
      button: {
        padding: '10px',
        backgroundColor: '#E01B1B',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      },
      select: {
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }
    }
  return (
    <div>
      <h1>Cadastro de Motoristas</h1>

      {/* Formulário de cadastro */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="cnh"
          placeholder="CNH"
          value={formData.cnh}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleInputChange}
          required
          style={styles.input}
        />
        <select name="status" value={formData.status} onChange={handleInputChange} style={styles.select}>
          <option value="ATIVO">ATIVO</option>
          <option value="INATIVO">INATIVO</option>
        </select>
        <button type="submit" style={styles.button}>Cadastrar</button>
      </form>

      {/* Lista de motoristas */}
      <h2>Lista de Motoristas</h2>
      <ul>
        {motoristas.map((motorista) => (
          <li key={motorista.id}>
            {motorista.nome} - {motorista.cnh} - {motorista.telefone} - {motorista.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Motoristas;