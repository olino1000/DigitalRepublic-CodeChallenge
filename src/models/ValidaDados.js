function validarCompr(comprimento) {
	if (comprimento.value < 100 || comprimento.value > 1500) {
		return {
			valido: false,
			texto: 'Comprimento deve ser no mínimo 1m e no máximo 15m.',
		};
	}
	return { valido: true, texto: '' };
}

function validarAlt(altura) {
	if (altura.value < 220 || altura.value > 1500) {
		return {
			valido: false,
			texto: 'Altura deve ser no mínimo 2.2m e no máximo 15m.',
		};
	}
	return { valido: true, texto: '' };
}

function validaPortJanela(portas, janelas, comprimento, altura) {
	const areaParede = comprimento.value * altura.value;
	const areaPortJanela = portas.value * 1.52 + janelas.value * 2.4;

	if (areaPortJanela > areaParede / 2) {
		return { valido: false, texto: 'Muitas portas e/ou janelas.' };
	}
	return { valido: true, texto: '' };
}

export { validarCompr, validarAlt, validaPortJanela };
