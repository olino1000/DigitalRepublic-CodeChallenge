import React from 'react';
import styled from 'styled-components';
import Titulo from '../Titulo';
import Formulario from '../Formulario';
import { corFundo, corTexto } from '../../styles/variaveis';
// import Extrato from "../Extrato";

const Container = styled.div`
	background-color: ${corFundo};
	min-height: 90vh;
	padding: 0px 15vw;
`;

const Conteudo = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: ${corTexto};

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export default () => (
	<Container>
		<Titulo>Calculadora de Tinta</Titulo>
		<Conteudo>
			<Formulario />
			{/* <Extrato />  */}
		</Conteudo>
	</Container>
);
