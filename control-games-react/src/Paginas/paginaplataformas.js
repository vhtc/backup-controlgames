import { Headerusuarioplataformas } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import { Botao_adicionar_plataforma, Botao_remover_plataforma } from '../componentes/Botao'
import './stilos/Paginaplataforma.css'

// inicio vhtc
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer';
import { Link } from 'react-router-dom';
// fim vhtc

const Paginaplataformas = () => {
    // inicio vhtc
    const [plataformas, setPlataformas] = useState([]);

    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/plataformas`)
            .then(response => {
                setPlataformas(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar Plataformas:', error);
            });
    }, []);
    // fim vhtc

    return (
        <div className='vhtc'>
            <div>
                <Headerusuarioplataformas />
            </div>

            <div id='main'>
                <section id="biblioteca">
                    <div class="divisao">
                        <div class="linha"></div>
                        <p>Plataformas</p>
                        <div class="linha"></div>
                    </div>
                    <div class="Jogos" id="games"></div>
                </section>

                <section id="Plataformas">
                    {/* atenção a partir daqui, tive que apagar as divs geradas 
                    manualmente e deixei apenas 1 div para geração automatica dos codigos */}

                    <ul className='Mostrar_plataformas'>
                        {plataformas.map(plataforma => (
                            <>
                                <img className='urlCapaPlataforma' src={plataforma.urlCapaPlataforma} alt={plataforma.nomePlataforma} ></img>
                                <a class="link_plataforma" target="_blank" href="https://store.steampowered.com">{plataforma.nomePlataforma}</a>
                            </>
                        ))}
                    </ul>

                    {/* <div class="Mostrar_plataformas">
                        <a class="link_img_plataforma" target="_blank" href="https://store.steampowered.com"><img src="imagens/icones plataformas/Steam.png" alt="" /></a>
                        <a class="link_plataforma" target="_blank" href="https://store.steampowered.com">Steam</a>
                    </div> */}

                    {/* <div class="Mostrar_plataformas">
                        <a class="link_img_plataforma" target="_blank" href="https://store.playstation.com"><img src="imagens/icones plataformas/PlayStation.png" alt="" /></a>
                        <a class="link_plataforma" target="_blank" href="https://store.playstation.com">PSN</a>
                    </div>

                    <div class="Mostrar_plataformas">
                        <a class="link_img_plataforma" target="_blank" href="https://play.google.com"><img src="imagens/icones plataformas/Google Play Store.png" alt="" /></a>
                        <a class="link_plataforma" target="_blank" href="https://play.google.com">Play Store</a>
                    </div>

                    <div class="Mostrar_plataformas">
                        <a class="link_img_plataforma" target="_blank" href="https://store.epicgames.com"><img src="imagens/icones plataformas/Epic Games.png" alt="" /></a>
                        <a class="link_plataforma" target="_blank" href="https://store.epicgames.com">Epic Games</a>
                    </div>

                    <div class="Mostrar_plataformas">
                        <a class="link_img_plataforma" target="_blank" href="https://www.ea.com"><img src="imagens/icones plataformas/10-2-electronic-arts-png 1.png" alt="" /></a>
                        <a class="link_plataforma" target="_blank" href="https://www.ea.com">EA Games</a>
                    </div> */}

                </section>

                <div id='botoes'>
                    <div id='botaoadd'>
                        <Botao_adicionar_plataforma />
                    </div>

                    <div id='botaoarem'>
                        <Botao_remover_plataforma />
                    </div>
                </div>

            </div>

            <div id='footer01'>
                <Footer_interno />
            </div>

        </div>

    )
}

export default Paginaplataformas