import React from 'react';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import ValidacoesTinta from './contexts/ValidacoesTinta';
import Cabecalho from './components/Cabecalho';
import Encapsula from './components/Encapsula';
import GlobalStyle from './styles/GlobalStyle';
import {
	validarCompr,
	validarAlt,
	validaPortEJanela,
	calculaLatasTinta,
} from './models/RegrasNegocio';

function App() {
	return (
		<>
			<GlobalStyle />
			<Cabecalho />
			<ValidacoesCadastro.Provider
				value={{
					comprimento: validarCompr,
					altura: validarAlt,
					portas: validaPortEJanela,
					janelas: validaPortEJanela,
				}}
			>
				<ValidacoesTinta.Provider
					value={{
						tinta: calculaLatasTinta,
					}}
				>
					<Encapsula />
				</ValidacoesTinta.Provider>
			</ValidacoesCadastro.Provider>
		</>
	);
}

export default App;
