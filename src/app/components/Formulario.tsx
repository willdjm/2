import React, { useState } from 'react';

const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Enviar os dados para o arquivo PHP
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('idade', idade);
    formData.append('cpf', cpf);

    try {
      const response = await fetch('/api/envia', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
      } else {
        console.error('Erro ao enviar dados:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md p-8 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Formulário</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
          <input 
            type="text" 
            id="nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="idade" className="block text-sm font-medium text-gray-700">Idade</label>
          <input 
            type="number" 
            id="idade" 
            value={idade} 
            onChange={(e) => setIdade(e.target.value)} 
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
          <input 
            type="text" 
            id="cpf" 
            value={cpf} 
            onChange={(e) => setCpf(e.target.value)} 
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
          />
        </div>
        <div>
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
