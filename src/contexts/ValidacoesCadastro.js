import React from 'react';

function semValidacao() {
	return { valido: true, texto: '' };
}

const ValidacoesCadastro = React.createContext({
	comprimento: semValidacao,
	altura: semValidacao,
	portas: semValidacao,
	janelas: semValidacao,
});

export default ValidacoesCadastro;
