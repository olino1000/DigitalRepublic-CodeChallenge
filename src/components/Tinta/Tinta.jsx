import React from 'react';
import PropTypes from 'prop-types';
import { Items, ItemInicio, Spans } from '../../styles';

const Tinta = ({ tintas }) => (
	<>
		<Items>
			<ItemInicio>
				<Spans>Lata de 0,5 litros: {tintas[0]}</Spans>
				<Spans>Lata de 2,5 litros: {tintas[1]}</Spans>
			</ItemInicio>
			<ItemInicio>
				<Spans>Lata de 3.6 litros: {tintas[2]}</Spans>
				<Spans>Lata de 18 litros: {tintas[3]}</Spans>
			</ItemInicio>
		</Items>
	</>
);

export default Tinta;

Tinta.propTypes = {
	tintas: PropTypes.arrayOf(PropTypes.number).isRequired,
};
