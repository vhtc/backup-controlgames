import { Headerusuario, Headerusuarioconfiguracao } from '../componentes/Header'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginagame.css'

const Paginagame = () => {
    return (
        <>

            <div>
                <Headerusuarioconfiguracao />
            </div>

            <div id='main'>
                <section>
                    <div class="divisao">
                        <div class="linha"></div>
                        <p id="gameid"></p>
                        <div class="linha"></div>
                    </div>

                    <div id="foto_box"><span id="fotoid"></span></div>

                    <article class="info">
                        <ul>
                            <li>Plataforma : <p id="plataformaid"></p> <span id="plataformaokid"></span></li>
                            <li>Status : <p id="statusid"></p></li>
                            <li>Categoria : <p id="categoriaid"></p></li>
                            <li>Progresso : <p id="progressoid"></p></li>
                            <li>Recomendo : <p id="recomendoid"></p></li>
                            <li>Ano de Lançamento : <p id="anoid"></p></li>
                            <li>Versão : <p id="versaoid"></p></li>
                        </ul>

                        <aside id="box_descricao">
                            <h2>Descrição</h2>
                            <p id="descricaoid"></p>
                        </aside>
                    </article>
                </section>

            </div>

            <div id='footer01'>
                <Footer_interno />
            </div>

        </>

    )
}

export default Paginagame