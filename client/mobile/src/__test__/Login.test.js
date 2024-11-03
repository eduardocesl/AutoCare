import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../app/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// Mock da navegação
const mockNavigate = jest.fn();
const navigation = { navigate: mockNavigate };

jest.mock('@react-native-async-storage/async-storage'); // Mock do AsyncStorage
jest.spyOn(Alert, 'alert'); // Mock do Alert para verificar chamadas

// Mock da função fetch para simular a requisição ao backend
global.fetch = jest.fn();

// Testes Unitários
describe('Login Mobile - Testes Unitários', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve renderizar corretamente o formulário de login', () => {
    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);
    
    expect(getByText('Acesse sua conta')).toBeTruthy();
    expect(getByPlaceholderText('Usuário')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('Deve mostrar um alerta se os campos obrigatórios não forem preenchidos', async () => {
    const { getByText } = render(<Login navigation={navigation} />);

    // Pressiona o botão sem preencher os campos obrigatórios
    fireEvent.press(getByText('Login'));

    // Verifica se o alerta foi disparado
    expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Por favor, preencha todos os campos.');
  });
});

// Testes de Integração
describe('Login Mobile - Testes de Integração com Backend', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve realizar login com sucesso e navegar para a tela principal', async () => {
    // Simula a resposta do backend para sucesso
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'fake-jwt-token' }),
    });

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);

    // Preenche os campos do formulário
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'password123');

    // Pressiona o botão de login
    fireEvent.press(getByText('Login'));

    // Verifica se a navegação foi chamada após login bem-sucedido
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('MainTabs'));
  });

  it('Deve mostrar um alerta para credenciais incorretas', async () => {
    // Simula uma resposta de erro do backend
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Credenciais inválidas' }),
    });

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);

    // Preenche os campos do formulário
    fireEvent.changeText(getByPlaceholderText('Usuário'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'senha_incorreta');

    // Pressiona o botão de login
    fireEvent.press(getByText('Login'));

    // Verifica se o alerta foi exibido
    await waitFor(() =>
      expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Credenciais inválidas')
    );
  });
});
