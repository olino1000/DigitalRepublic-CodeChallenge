import React, { useState, useEffect, useContext } from 'react';
import Titulo from '../Titulo';
import Formulario from '../Formulario';
import { Container, Conteudo, BoxParedes, Botao } from '../../styles';
import Paredes from '../Paredes';
import Tinta from '../Tinta';
import ValidacoesTinta from '../../contexts/ValidacoesTinta';
import useTinta from '../../hooks/useTinta';

function Encapsula() {
	const [dadosColetados, setDados] = useState([]);
	const [paredes, setParedes] = useState(0);
	const validacoes = useContext(ValidacoesTinta);

	const [tinta, calculaTinta] = useTinta(validacoes, dadosColetados);

	useEffect(() => {});

	function addNewTask(task) {
		const itensCopy = Array.from(dadosColetados);
		if (paredes < 4) {
			itensCopy.push({
				id: paredes,
				comprimento: task.comprimento,
				altura: task.altura,
				portas: task.portas,
				janelas: task.janelas,
			});
			setParedes(paredes + 1);
		}
		setDados(itensCopy);
	}

	function deleteTask(index) {
		const itensCopy = Array.from(dadosColetados);
		itensCopy.splice(index, 1);
		setDados(itensCopy);
		setParedes(paredes - 1);
	}

	return (
		<Container>
			<Titulo>Calculadora de Tinta</Titulo>
			<Conteudo>
				<Formulario onSubmit={addNewTask} />
				<BoxParedes>
					{dadosColetados.map(
						({ id, comprimento, altura, portas, janelas }, index) => (
							<Paredes
								key={id}
								comprimento={comprimento}
								altura={altura}
								portas={portas}
								janelas={janelas}
								onDelete={() => deleteTask(index)}
							/>
						)
					)}
					<Botao onClick={calculaTinta} name="tinta">
						Calcula Tinta
					</Botao>
					<Tinta tintas={tinta} />
				</BoxParedes>
			</Conteudo>
		</Container>
	);
}

export default Encapsula;
