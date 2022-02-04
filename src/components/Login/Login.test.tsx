import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';

const MockComponent = () => render(
    <Login />
)

describe('Login', () => {
    it('Render and Test text', () => {
        MockComponent();

        const title = screen.getByText('Acesso ao sistema');

        expect(title).toBeInTheDocument();
    });
    it('Login Test', () => {
        MockComponent();

        const usuario = screen.getByTestId('inputUsuario');
        const senha = screen.getByTestId('inputSenha');
        const button = screen.getByTestId('button');

        fireEvent.change(usuario, {target: {value: 'claudio.peixoto'}})
        fireEvent.change(senha, {target: {value: '00000006'}})
        fireEvent.click(button);
    });
});