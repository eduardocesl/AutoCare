import { useState } from 'react';
import axios from 'axios';
import CardVeiculo from '../../components/CardVeiculo';
import styles from './Veiculos.module.css';

const Veiculos = () => {
  const [formData, setFormData] = useState({
    placa: '',
    marca: '',
    modelo: '',
    anoFabricacao: '',
    anoModelo: '',
    cor: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertendo anoFabricacao e anoModelo para números
    const updatedFormData = {
      ...formData,
      anoFabricacao: parseInt(formData.anoFabricacao, 10),
      anoModelo: parseInt(formData.anoModelo, 10)
    };

    setFormData(updatedFormData);

    try {
      const response = await axios.post('http://localhost:3000/veiculos', updatedFormData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Veículo cadastrado com sucesso:', response.data);
      alert('Veículo cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o veículo:', error);
    }
  };

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 style={{alignSelf: "center", marginBottom: "2em"}}>Cadastre um Veículo</h3>

        <label htmlFor="placa">Placa</label>
        <input
          type="text"
          name="placa"
          placeholder="Placa"
          value={formData.placa}
          onChange={handleChange}
          required
        />
        <label htmlFor="marca">Marca</label>
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={formData.marca}
          onChange={handleChange}
          required
        />
        <label htmlFor="placa">Modelo</label>
        <input
          type="text"
          name="modelo"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={handleChange}
          required
        />
        <label htmlFor="placa">Ano de Fabricação</label>
        <input
          type="number"
          name="anoFabricacao"
          placeholder="Ano de Fabricação"
          value={formData.anoFabricacao}
          onChange={handleChange}
          required
        />
        <label htmlFor="placa">Ano do Modelo</label>
        <input
          type="number"
          name="anoModelo"
          placeholder="Ano do Modelo"
          value={formData.anoModelo}
          onChange={handleChange}
          required
        />
        <label htmlFor="placa">Cor</label>
        <input
          type="text"
          name="cor"
          placeholder="Cor"
          value={formData.cor}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar Veículo</button>
      </form>

      <div className={styles.veiculos}>
        <CardVeiculo />
      </div>
    </div>
  );
};

export default Veiculos;