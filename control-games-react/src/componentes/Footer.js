import Logo from '../imagens/Logotipo/logotipo header.png'
import Img_suporte from '../imagens/botoes/Customer Support.png'
import Img_config from '../imagens/botoes/Settings.png'
import './stilos/footerstyle.css'

export function Footer_interno() {
    return (
        <div id='footer'>

            <section className="rodape">
                <div className="logo">
                    <a href="#"><img src={Logo}></img></a>
                    <a href="#">Control_Games</a>
                </div>
                
                <div className="links">
                    <a href="#"><img src={Img_suporte}></img>Suporte</a>
                    <a href="#"><img src={Img_config}></img>Configurações</a>
                </div>
            </section>
    
        </div>
    );
}

export function Footer_externo() {
    return (
        <div id='footer'>

            <section className="rodape">
                <div className="logo">
                    <a href="#"><img src={Logo}></img></a>
                    <a href="#">Control_Games</a>
                </div>
                
                <div className="links">
                    <a href="suporte.html"><img src={Img_suporte}></img>Suporte</a>
                </div>
            </section>
    
        </div>
    );
}