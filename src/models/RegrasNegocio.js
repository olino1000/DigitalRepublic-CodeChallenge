function validarCompr(comprimento) {
	if (comprimento < 1 || comprimento > 15) {
		return {
			valido: false,
			texto: 'Comprimento deve ser no mínimo 1m e no máximo 15m.',
		};
	}
	return { valido: true, texto: '' };
}

function validarAlt(altura) {
	if (altura < 2.2 || altura > 15) {
		return {
			valido: false,
			texto: 'Altura deve ser no mínimo 2.2m e no máximo 15m.',
		};
	}
	return { valido: true, texto: '' };
}

function validaPortEJanela(proporcao) {
	const areaPorta = 1.52;
	const areaJanela = 2.4;
	const areaParede = proporcao.compr * proporcao.alt;
	const areaPortJanela =
		proporcao.port * areaPorta + proporcao.janel * areaJanela;
	if (areaPortJanela > areaParede / 2) {
		return { valido: false, texto: 'Muitas portas e/ou janelas.' };
	}
	return { valido: true, texto: '' };
}

function calculaLatasTinta(dadosColetados) {
	let tintaTotal = 0;
	let areaParede = 0;
	let areaSemTinta = 0;
	let areaPintavel = 0;
	let tintaFinal = 0;
	const areaPorta = 1.52;
	const areaJanela = 2.4;
	const litroTintaPinta = 5;
	const tamanhoLata = [0.5, 2.5, 3.6, 18];
	const arrayRetorno = [];

	dadosColetados.forEach((item, indice) => {
		areaParede =
			dadosColetados[indice].comprimento * dadosColetados[indice].altura;
		areaSemTinta =
			areaPorta * dadosColetados[indice].portas +
			areaJanela * dadosColetados[indice].janelas;
		areaPintavel = areaParede - areaSemTinta;
		tintaTotal += areaPintavel;
	});

	tintaFinal = tintaTotal / litroTintaPinta;

	tamanhoLata.forEach((item, indice) => {
		if (tamanhoLata[indice] <= tintaFinal) {
			const temp = tintaFinal / tamanhoLata[indice];
			arrayRetorno[indice] = Math.ceil(temp);
		} else {
			arrayRetorno[indice] = 0;
		}
	});

	return arrayRetorno;
}

export { validarCompr, validarAlt, validaPortEJanela, calculaLatasTinta };
