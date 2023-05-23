import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [apiKey, setApiKey] = useState('');
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Realize a chamada à API para verificar a chave

    try {
      const response = await axios.get(`sua-url-da-api/validate-api-key`, {
        params: {
          apiKey: apiKey
        }
      });

      // Se a chave for válida, redirecione para a página de seleção de país
      if (response.data.valid) {
        navigate('/select-country');
      } else {
        alert('API key inválida. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao validar a API key. Por favor, tente novamente.');
    }
  };

  return (
    <div>
      {/* Seu formulário e outros elementos... */}
    </div>
  );
}

export default HomePage;
