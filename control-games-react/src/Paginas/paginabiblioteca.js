import { Headerusuariobiblioteca } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import { Botao_cadastrar_jogo } from '../componentes/Botao'
import './stilos/Paginabiblioteca.css'

// inicio vhtc 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link } from 'react-router-dom';
const usuarioLogado = localStorage.getItem('usuarioLogado')
// fim vhtc

const Paginabiblioteca = () => {
    // inicio vhtc
    const [jogos, setJogos] = useState([]);

    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/jogos`)
            .then(response => {
                setJogos(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar Jogos:', error);
            });
    }, []);
    // fim vhtc

    return (
        <>

            <div>
                <Headerusuariobiblioteca />
            </div>

            <div id='main'>
                <section id="biblioteca">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Minha Biblioteca</p>
                        <div class="linha"></div>
                    </div>
                    <div class="Jogos" id="games"></div>
                </section>

                {/* editar o css da geração dos jogos */}
                <ul className='Imagem_mais_jogados'>
                    {
                        jogos
                            .filter((jogo) => jogo.usuario === usuarioLogado)
                            .map(jogo => (
                                (
                                    <li className='Mais_jogados'>
                                        <Link key={jogo.id} to={`/biblioteca/${jogo.nomeJogo}`}>
                                            <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                            <p>Jogo:{jogo.nomeJogo}</p>
                                        </Link>
                                    </li>
                                )
                            ))}
                </ul>
                {/* <div class="Imagem_mais_jogados">
                    <div class="Mais_jogados">
                        <a class="link_img_jogo" href="game.html" onclick="abrirgame('DIABLO4')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg?t=1701194709" alt="" /></a>
                        <a class="link_jogo" href="game.html" onclick="abrirgame('DIABLO4')">Diablo IV</a>
                    </div>
                </div> */}

                <div id='botao_cadastrar_jogo'>
                    <Botao_cadastrar_jogo />
                </div>

            </div>


            <div id='footer01'>
                <Footer_interno />
            </div>

        </>

    )
}

export default Paginabiblioteca