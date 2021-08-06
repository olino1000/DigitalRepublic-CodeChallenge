import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Box, Botao, Form } from '../../styles';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function Formulario({ onSubmit }) {
	const [comprimento, setComprimento] = useState('');
	const [altura, setAltura] = useState('');
	const [portas, setPortas] = useState('');
	const [janelas, setJanelas] = useState('');
	const validacoes = useContext(ValidacoesCadastro);
	const proporcao = {
		compr: comprimento,
		alt: altura,
		port: portas,
		janel: janelas,
	};
	const [erros, validarCamposBase, validarCamposAdicionais, possoEnviar] =
		useErros(validacoes, proporcao);

	return (
		<Box>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					if (possoEnviar()) {
						onSubmit({ comprimento, altura, portas, janelas });
					}
				}}
			>
				<TextField
					value={comprimento}
					onChange={(event) => {
						setComprimento(event.target.value);
					}}
					onBlur={validarCamposBase}
					error={!erros.comprimento.valido}
					helperText={erros.comprimento.texto}
					id="comprimento"
					name="comprimento"
					label="Comprimento (em m)"
					type="number"
					required
					variant="outlined"
					margin="normal"
					fullWidth
				/>
				<TextField
					value={altura}
					onChange={(event) => {
						setAltura(event.target.value);
					}}
					onBlur={validarCamposBase}
					error={!erros.altura.valido}
					helperText={erros.altura.texto}
					id="altura"
					name="altura"
					label="Altura (em m)"
					type="number"
					required
					variant="outlined"
					margin="normal"
					fullWidth
				/>
				<TextField
					value={portas}
					onChange={(event) => {
						setPortas(event.target.value);
					}}
					onBlur={validarCamposAdicionais}
					error={!erros.portas.valido}
					helperText={erros.portas.texto}
					id="portas"
					name="portas"
					label="Qtd de portas"
					type="number"
					required
					variant="outlined"
					margin="normal"
					fullWidth
				/>
				<TextField
					value={janelas}
					onChange={(event) => {
						setJanelas(event.target.value);
					}}
					onBlur={validarCamposAdicionais}
					error={!erros.janelas.valido}
					helperText={erros.janelas.texto}
					id="janelas"
					name="janelas"
					label="Qtd de janelas"
					type="number"
					required
					variant="outlined"
					margin="normal"
					fullWidth
				/>
				<Botao type="submit">Adicionar Parede</Botao>
			</Form>
		</Box>
	);
}

export default Formulario;

Formulario.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
