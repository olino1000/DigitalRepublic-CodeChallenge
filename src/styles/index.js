import styled from 'styled-components';
import { corBox, corPrincipal, corFundo, corTexto } from './variaveis';

export const ItemInicio = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const Spans = styled.span`
  display: flex;
  flex-direction: column;
  margin 3px;
  
`;

export const Container = styled.div`
	background-color: ${corFundo};
	min-height: 90vh;
	padding: 0px 15vw;
`;

export const Conteudo = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: ${corTexto};

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 0;
	background-color: ${corBox};
	border-radius: 5px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
	padding: 20px;
	width: 32%;
	height: fit-content;

	@media (max-width: 800px) {
		width: 100%;
		padding: 18px;
	}
`;

export const BoxParedes = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${corBox};
	border-radius: 5px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
	padding: 20px;
	width: 60%;

	@media (max-width: 800px) {
		width: 100%;
		padding: 18px;
		margin-top: 20px;
	}
`;

export const Items = styled.div`
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	margin: 2px 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	font-size: 15px;

	@media (max-width: 800px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const Botao = styled.button`
	margin: 15px auto 15px auto;
	display: block;
	border-radius: 20px;
	background-color: ${corPrincipal};
	border: none;
	color: white;
	font-weight: 600;
	font-size: 14px;
	padding: 8px 20px;
	cursor: pointer;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;
