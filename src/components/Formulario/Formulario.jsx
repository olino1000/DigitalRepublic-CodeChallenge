import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Box, Botao, Form } from '../../styles';
// import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function Formulario() {
	const [comprimento, setComprimento] = useState('');
	const [altura, setAltura] = useState('');
	const [portas, setPortas] = useState('');
	const [janelas, setJanelas] = useState('');
	// const validacoes = useContext(ValidacoesCadastro);
	// onst [erros, validarCampos] = useErros(validacoes);

	return (
		<Box>
			<Form>
				<TextField
					value={comprimento}
					onChange={(event) => {
						setComprimento(event.target.value);
					}}
					// onBlur={validarCampos}
					// error={!erros.senha.valido}
					// helperText={erros.senha.texto}
					id="comprimento"
					name="comprimento"
					label="Comprimento (em cm)"
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
					// onBlur={validarCampos}
					// error={!erros.senha.valido}
					// helperText={erros.senha.texto}
					id="altura"
					name="altura"
					label="Altura (em cm)"
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
					// onBlur={validarCampos}
					// error={!erros.senha.valido}
					// helperText={erros.senha.texto}
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
					// onBlur={validarCampos}
					// error={!erros.senha.valido}
					// helperText={erros.senha.texto}
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
