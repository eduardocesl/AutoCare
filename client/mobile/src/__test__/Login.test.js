import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from '../app/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// Mock da navegação
const mockNavigate = jest.fn();
const navigation = { navigate: mockNavigate };

jest.mock('@react-native-async-storage/async-storage'); // Mock do AsyncStorage

jest.spyOn(Alert, 'alert'); // Mock do Alert para verificar chamadas

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Deve renderizar corretamente o formulario de login', () => {
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
