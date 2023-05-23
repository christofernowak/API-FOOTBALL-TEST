import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const [apiKey, setApiKey] = useState('');
  const history = useHistory();

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Verificar a validade da API key
      // Faça uma solicitação à API para verificar a validade da chave
      const response = await axios.get(`https://api.example.com/validate?key=${apiKey}`);

      // Se a chave for válida, redirecione para a página de seleção de país
      if (response.data.valid) {
        history.push('/select-country');
      } else {
        alert('API key inválida. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao validar a API key', error);
      alert('Ocorreu um erro ao validar a API key. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      <h1>Bem-vindo(a) ao Football App!</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="apiKey">Digite sua API key:</label>
        <input
          type="text"
          id="apiKey"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>
    </div>
  );
}

export default HomePage;