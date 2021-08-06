import React from 'react';
import PropTypes from 'prop-types';
import { Botao, Items, ItemInicio, Spans } from '../../styles';

const Paredes = ({ onDelete, comprimento, altura, portas, janelas }) => (
	<>
		<Items>
			<ItemInicio>
				<Spans>Comprimento: {comprimento}</Spans>
				<Spans>Altura: {altura}</Spans>
			</ItemInicio>
			<ItemInicio>
				<Spans>Portas: {portas}</Spans>
				<Spans>Janelas: {janelas}</Spans>
			</ItemInicio>
			<ItemInicio>
				<Botao onClick={onDelete}>Excluir</Botao>
			</ItemInicio>
		</Items>
	</>
);

export default Paredes;

Paredes.propTypes = {
	onDelete: PropTypes.func.isRequired,
	comprimento: PropTypes.string.isRequired,
	altura: PropTypes.string.isRequired,
	portas: PropTypes.string.isRequired,
	janelas: PropTypes.string.isRequired,
};
