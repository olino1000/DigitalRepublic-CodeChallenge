import { useState } from 'react';

function criarEstadoInicial(validacoes) {
	const estadoInicial = {};
	Object.keys(validacoes).forEach((campo) => {
		estadoInicial[campo] = { valido: true, texto: '', metrica: 0 };
	});

	return estadoInicial;
}

function useErros(validacoes, proporcao) {
	const estadoInicial = criarEstadoInicial(validacoes);
	const [erros, setErros] = useState(estadoInicial);

	function validarCamposBase(event) {
		const { name, value } = event.target;
		const novoEstado = { ...erros };
		novoEstado[name] = validacoes[name](value);
		setErros(novoEstado);
	}

	function validarCamposAdicionais(event) {
		const { name } = event.target;
		const novoEstado = { ...erros };
		novoEstado[name] = validacoes[name](proporcao);
		setErros(novoEstado);
	}

	function possoEnviar() {
		let retorno = true;
		Object.keys(erros).forEach((campo) => {
			if (!erros[campo].valido) {
				retorno = false;
			}
		});

		return retorno;
	}

	return [erros, validarCamposBase, validarCamposAdicionais, possoEnviar];
}

export default useErros;
