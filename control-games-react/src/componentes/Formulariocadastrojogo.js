import './stilos/formcadastrojogo.css'

// inicio vhtc
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link } from 'react-router-dom';

// fim vhtc

export function Form_cadastrojogo() {

    // inicio vhtc
    const [jogos, setJogos] = useState([]);
    const [nomeJogo, setNomeJogo] = useState('');
    const [urlCapaJogo, setUrlCapaJogo] = useState('');
    const [plataformas, setPlataformas] = useState([]);
    const [plataforma, setPlataforma] = useState('');
    const [status, setStatus] = useState('');
    const [categoria, setCategoria] = useState('');
    const [progresso, setProgresso] = useState('');
    const [recomendo, setRecomendo] = useState('');
    const [ano, setAno] = useState('');
    const [descricao, setDescricao] = useState('');
    const usuario = localStorage.getItem('usuarioLogado')

    const CriarJogo = async () => {
        try {
            await axios.post(`http://${LocalServerUrl}/jogos`, { nomeJogo, urlCapaJogo, plataforma, status, categoria, progresso, recomendo, ano, descricao, usuario });
            alert(`Jogo  ${nomeJogo} cadastrado com sucesso`);
            setNomeJogo('');
            setUrlCapaJogo('');
            setPlataforma('');
            setStatus('');
            setCategoria('');
            setProgresso('');
            setRecomendo('');
            setAno('');
            setDescricao('');



        } catch (error) {
            console.error('Erro ao criar Jogo:');
            alert(`Erro ao criar Jogo, verifique se existe algum informação faltante ou Jogo já existe`);

        }
    };

    // Função para carregar as plataformas disponíveis
    const carregarPlataformas = async () => {
        try {
            const response = await axios.get(`http://${LocalServerUrl}/plataformas`);
            setPlataformas(response.data);
        } catch (error) {
            console.error('Erro ao carregar Plataformas:', error);
        }
    };

    // UseEffect para carregar salas assim que o componente for montado
    useEffect(() => {
        carregarPlataformas();
    }, []);

    // fim vhtc





    return (
        <div id='container'>

            <div class="divisao">
                <p>Cadastrar Jogo</p>
                <div class="linha"></div>
            </div>

            <div id='FormGame'>
                {/* exclui o id do jogo ja que o banco de dados cria automaticamente */}
                {/* <div id="box_id">
                    <p>ID do Jogo</p>
                    <input type="text" id="id_input" />
                </div> */}

                <div id="box_nome">
                    <p>Nome do Jogo</p>
                    <input type="text" id="nome_input" value={nomeJogo} onChange={(e) => setNomeJogo(e.target.value)} />
                </div>

                <div id="box_nome">
                    <p>URL da capa do Jogo</p>
                    <input type="text" id="capa_input" value={urlCapaJogo} onChange={(e) => setUrlCapaJogo(e.target.value)} />
                </div>

                <div id="box_plataforma">
                    <p>Plataforma</p>

                    {/* comentei o select pra editar o css */}

                    <select id='plataformas_input' name='plataformas' value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                        <option value=''>Selecione uma plataforma</option>
                        {plataformas.map((plataforma) => (
                            <option key={plataforma.id} value={plataforma.id}>
                                {plataforma.nomePlataforma}
                            </option>
                        ))}
                    </select>
                    {/*                     
                    <select id="plataformas_input" name="plataformas">
                        <option value="PC">PC</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Play Store">Play Store</option>
                        <option value="PlayStation">PSN</option>
                        <option value="steam">Steam</option>
                        <option value="epicgames">Epic Games</option>
                    </select> */}
                </div>

                <div id="box_status">
                    <p>Status</p>
                    <select id="status_input" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value=''>Selecione uma Status</option>
                        <option value="Jogando">Jogando</option>
                        <option value="Jogado">Zerado</option>
                        <option value="Zerado">Nunca jogado</option>
                    </select>
                </div>

                <div id="box_categoria">
                    <p>Categoria do jogo</p>
                    <select id="categoria_input" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value=''>Selecione uma Categoria</option>
                        <option value="rpg">RPG</option>
                        <option value="acao">Ação</option>
                        <option value="simulador">Simulador</option>
                        <option value="fps">FPS</option>
                        <option value="terror">Terror</option>
                        <option value="estratégia">Estratégia</option>
                        <option value="cooperativo">Cooperativo</option>
                        <option value="casual">Casual</option>
                        <option value="mundo aberto">Mundo Aberto</option>
                        <option value="esportes">Esportes</option>
                        <option value="aventura">Aventura</option>
                        <option value="quebra-cabeca">Quebra-Cabeça</option>
                        <option value="corrida">Corrida</option>
                        <option value="luta">Luta</option>
                        <option value="educativo">Educativo</option>
                        <option value="musical">Musical</option>
                        <option value="estrategia_em_tempo_real">Estratégia em Tempo Real</option>
                        <option value="construcao">Construção</option>
                        <option value="construcao">Outros</option>

                    </select>
                </div>

                <div id="box_progresso">
                    <p>Progresso do jogo</p>
                    <input type="text" id="progresso_input" value={progresso} onChange={(e) => setProgresso(e.target.value)} />
                </div>

                <div id="box_recomendo">
                    <p>Recomendo o Jogo</p>
                    <select id="recomendo_input" name="recomendacao" value={recomendo} onChange={(e) => setRecomendo(e.target.value)} >
                        <option value=''>Selecione uma recomendação</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                        <option value="em avaliacao">Em avaliação</option>
                    </select>
                </div>

                <div id="box_ano_lancamento">
                    <p>Ano de Lançamento</p>
                    <input type="date" id="ano_input" value={ano} onChange={(e) => setAno(e.target.value)} />
                </div>
                {/* tambem exclui a versao do jogo ja que não colocamos no projeto atual */}
                {/* <div id="box_versao">
                    <p>Versão do Jogo</p>
                    <select id="versao_input" name="versao">
                        <option value="Fisica">Fisica</option>
                        <option value="Digital">Digital</option>
                    </select>
                </div> */}

                <div id="box_descricao">
                    <p>Descrição do Jogo</p>
                    <textarea name="descricao" id="descricao_input" cols="55" rows="13" value={descricao} onChange={(e) => setDescricao(e.target.value)} ></textarea>
                </div>

            </div>
            {/* lembrar de editar o css dos botões */}
            <button onClick={CriarJogo}>Adicionar Jogo</button>
            <Link to='/biblioteca'>
                <button>Visualizar Jogos</button>
            </Link>


        </div>

    );
}