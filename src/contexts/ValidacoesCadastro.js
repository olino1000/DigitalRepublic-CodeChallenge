import React from 'react';

function semValidacao() {
	return { valido: true, texto: '' };
}

const ValidacoesCadastro = React.createContext({
	comprimento: semValidacao,
	altura: semValidacao,
	portasEjanelas: semValidacao,
});

export default ValidacoesCadastro;
