import React from 'react';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import GlobalStyle from './styles/GlobalStyle';
import {
	validarCompr,
	validarAlt,
	validaPortJanela,
} from './models/ValidaDados';

function App() {
	return (
		<>
			<GlobalStyle />
			<Cabecalho />
			<ValidacoesCadastro.Provider
				value={{
					comprimento: validarCompr,
					altura: validarAlt,
					portasEjanelas: validaPortJanela,
				}}
			>
				<Container />
			</ValidacoesCadastro.Provider>
		</>
	);
}

export default App;
