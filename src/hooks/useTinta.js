import { useState } from 'react';

function useTinta(validacoes, dadosColetados) {
	const [tinta, setTinta] = useState([]);

	function calculaTinta(event) {
		const { name } = event.target;
		const novoEstado = validacoes[name](dadosColetados);
		setTinta(novoEstado);
	}

	return [tinta, calculaTinta];
}

export default useTinta;
