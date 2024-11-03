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
    // Verifica a renderização do formulário
    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);
    
    expect(getByText('Acesse sua conta')).toBeTruthy();
    expect(getByPlaceholderText('Usuário')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('Deve mostrar um alerta se os campos obrigatórios não forem preenchidos', async () => {
    // Clica em login sem preencher os campos
    const { getByText } = render(<Login navigation={navigation} />);

    fireEvent.press(getByText('Login'));

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

    fireEvent.changeText(getByPlaceholderText('Usuário'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'password123');

    fireEvent.press(getByText('Login'));

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('MainTabs'));
  });

  it('Deve mostrar um alerta para credenciais incorretas', async () => {
    // Simula a resposta do backend para dados inválidos
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Credenciais inválidas' }),
    });

    const { getByPlaceholderText, getByText } = render(<Login navigation={navigation} />);

    fireEvent.changeText(getByPlaceholderText('Usuário'), 'test@example.com');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'senha_incorreta');

    fireEvent.press(getByText('Login'));

    await waitFor(() =>
      expect(Alert.alert).toHaveBeenCalledWith('Erro', 'Credenciais inválidas')
    );
  });
});
