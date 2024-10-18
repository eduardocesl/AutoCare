import { useEffect, useState } from 'react';
import axios from 'axios';

const CardVeiculo = () => {
  const [veiculos, setVeiculos] = useState([]);

  // Buscar os veículos do servidor
  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/veiculos');
        setVeiculos(response.data); // Atualiza o estado com os veículos recebidos
      } catch (error) {
        console.error('Erro ao buscar os veículos:', error);
      }
    };

    fetchVeiculos();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {veiculos.map((veiculo) => (
        <div
          key={veiculo.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
        >
          <h3>{veiculo.modelo}</h3>
          <p>Placa: {veiculo.placa}</p>
          <p>Marca: {veiculo.marca}</p>
          <p>Ano Fabricação: {veiculo.anoFabricacao}</p>
          <p>Ano Modelo: {veiculo.anoModelo}</p>
          <p>Cor: {veiculo.cor}</p>
        </div>
      ))}
    </div>
  );
};

export default CardVeiculo;
