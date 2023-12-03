import { Headerusuariohome } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import { Botao_Jogaragora } from '../componentes/Botao'
import './stilos/Paginahome.css'

// inicio vhtc
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';

// fim vhtc

const Paginahome = () => {

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

    const usuarioLogado = localStorage.getItem('usuarioLogado')
    const navigate = useNavigate()

    const deslogar = () => {
        localStorage.setItem('usuarioLogado', '')
        navigate('/login')
    }
    // fim vhtc
    return (
        <div className='vhtc'>
            <div>
                <Headerusuariohome />
            </div>

            <div id='main'>
                <section id="ultimo_jogo">
                    <div class="divisao">
                        <div class="linha"></div>
                        {/* por enquanto alterei o nome para ultimo jogo adicionado, mas podemos fazer qualquer jogo que quiser */}
                        <p>Ultimo Jogo Adicionado</p>
                        <div class="linha"></div>
                    </div>
                    {
                        jogos
                            .filter((jogo) => jogo.usuario === usuarioLogado)
                            .slice(-1)
                            .map((jogo) => (
                                (
                                    <a key={jogo.id} >
                                        <Link to={`/biblioteca/${jogo.nomeJogo}`}>
                                            <img src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                        </Link>
                                    </a>
                                )
                            ))
                    }
                    {/* <a href="#" id="HOGW" onclick="abrirgame('HOGW')"><img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000014724/72ce0a17215521a167c3da579db4cc48a2f7a52eacc81ad985ba20fd6817fdc2" alt="Ultimo a ser jogado" /></a> */}
                    <Botao_Jogaragora id='botao-jogar' />
                </section>

                <section id="mais">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Jogando Agora</p>
                        <div class="linha"></div>
                    </div>

                    <div className='Imagem_mais_jogados'>

                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Jogando')
                                .slice(0, 4)
                                .sort(() => Math.random() - 0.5)
                                .map((jogo) => (
                                    (
                                        <li className='Mais_jogados' key={jogo.id} >
                                            <Link to={`/biblioteca/${jogo.nomeJogo}`}>
                                                <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                            </Link>
                                        </li>
                                    )
                                ))
                        }
                    </div>


                    {/* <div class="Imagem_mais_jogados">
                        <div class="Mais_jogados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('DIABLO4')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg?t=1701194709" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('DIABLO4')">Diablo IV</a>
                        </div>

                        <div class="Mais_jogados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('RDR2')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1695140956" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('RDR2')">Red Dead Redemption 2</a>
                        </div>

                        <div class="Mais_jogados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('SDIF')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1548850/header.jpg?t=1695399958" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('SDIF')">Sixy Day In Fallujah</a>
                        </div>

                        <div class="Mais_jogados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('WART')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg?t=1698848401" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('WART')">War Thunder</a>
                        </div>
                    </div> */}
                </section>

                <section id="agora">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Não Jogando</p>
                        <div class="linha"></div>
                    </div>

                    <div class="Imagens_jogando_agora">
                        <div class="Jogando_agora">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('CODMW3')"><img src="imagens/Jogos img menor/calf of duty mw.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('CODMW3')">Calf Of Duty</a>
                        </div>

                        <div class="Jogando_agora">
                            <a class="link_img_jogo" href="game.html" id="SNE4" onclick="abrirgame('SNE4')"><img src="imagens/Jogos img menor/sniper elite 4.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" id="SNE4" onclick="abrirgame('SNE4')">Sniper Elite 4</a>
                        </div>

                        <div class="Jogando_agora">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('FOH5')"><img src="imagens/Jogos img menor/forza horizon5.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('FOH5')">Forza Horizon 5</a>
                        </div>

                        <div class="Jogando_agora">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('SNC2')"><img src="imagens/Jogos img menor/sniper contracts 2.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('SNC2')">Sniper Contracts 2</a>
                        </div>
                    </div>
                </section>

                <section id="zerado">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Zerados</p>
                        <div class="linha"></div>
                    </div>
                    <div className='Imagem_mais_jogados'>

                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado && jogo.status === 'Zerado')
                                .slice(0, 4)
                                .sort(() => Math.random() - 0.5)
                                .map((jogo) => (
                                    (
                                        <li className='Mais_jogados' key={jogo.id} >
                                            <Link to={`/biblioteca/${jogo.nomeJogo}`}>
                                                <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                            </Link>
                                        </li>
                                    )
                                ))
                        }
                    </div>

                    {/* <div class="Imagens_zerados">
                        <div class="Zerados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('CODMW3')"><img src="imagens/Jogos img menor/calf of duty mw.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('CODMW3')">Calf Of Duty</a>
                        </div>

                        <div class="Zerados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('NFSH')"><img src="imagens/Jogos img menor/nfs.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('NFSH')">N.F.S Heat</a>
                        </div>

                        <div class="Zerados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('SDIF')"><img src="imagens/Jogos img menor/six day in fallujah.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('SDIF')">Sixy Day In Fallujah</a>
                        </div>

                        <div class="Zerados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('WART')"><img src="imagens/Jogos img menor/war thunder.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('WART')">War Thunder</a>
                        </div>
                    </div> */}
                </section>

                <section id="categorias">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Categorias</p>
                        <div class="linha"></div>
                    </div>

                    <div class="Imagens_categoria">
                        <div class="Categoria">
                            <a href="#"><img src="imagens/Categorias/adventure.png" alt="" /></a>
                            <a class="link_categoria" href="#">Aventura</a>
                        </div>

                        <div class="Categoria">
                            <a href="#"><img src="imagens/Categorias/ação.png" alt="" /></a>
                            <a class="link_categoria" href="#">Ação</a>
                        </div>

                        <div class="Categoria">
                            <a href="#"><img src="imagens/Categorias/fighting_martial_arts.png" alt="" /></a>
                            <a class="link_categoria" href="#">Luta</a>
                        </div>

                        <div class="Categoria">
                            <a href="#"><img src="imagens/Categorias/rpg.png" alt="" /></a>
                            <a class="link_categoria" href="#">R.P.G</a>
                        </div>
                    </div>
                </section>

                <section id="nrecomendado">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Não Recomendados</p>
                        <div class="linha"></div>
                    </div>
                    <div className='Imagens_nrecomendado'>

                        {
                            jogos
                                .filter((jogo) => jogo.usuario === usuarioLogado && jogo.recomendo === 'Não')
                                .slice(0, 4)
                                .sort(() => Math.random() - 0.5)
                                .map((jogo) => (
                                    (
                                        <li className='Nao_recomendados' key={jogo.id} >
                                            <Link to={`/biblioteca/${jogo.nomeJogo}`}>
                                                <img className='link_img_jogo' src={jogo.urlCapaJogo} alt={jogo.nomeJogo} ></img>
                                            </Link>
                                        </li>
                                    )
                                ))
                        }
                    </div>

                    {/* <div class="Imagens_nrecomendado">
                        <div class="">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('DATD')"><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1868140/header.jpg?t=1692149536" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('DATD')">Dave the diver</a>
                        </div>

                        <div class="Nao_recomendados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('MTSA')"><img src="imagens/Jogos img menor/mytime.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('MTSA')">Sandrock</a>
                        </div>

                        <div class="Nao_recomendados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('SNOW')"><img src="imagens/Jogos img menor/snow runner.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('SNOW')">Snow Runner</a>
                        </div>

                        <div class="Nao_recomendados">
                            <a class="link_img_jogo" href="game.html" onclick="abrirgame('STDW')"><img src="imagens/Jogos img menor/stardewvalley.jpg" alt="" /></a>
                            <a class="link_jogo" href="game.html" onclick="abrirgame('STDW')">Stardew Valley</a>
                        </div>
                    </div> */}

                </section>

            </div>


            <div className='footervhtc'>
                <Footer_interno />
            </div>
        </div>

    )
}

export default Paginahome