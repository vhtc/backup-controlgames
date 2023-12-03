import Logo from '../imagens/Logotipo/logotipo header.png'
import Imagem_usuario from '../imagens/avatar/imgusuario.jpeg'
import Img_classe from '../imagens/avatar/imgclasse.png'
import './stilos/headerstyle.css'
import { Link } from 'react-router-dom';

export function Headerusuariohome() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="menu">
                <nav>
                    <a href="#">Home</a>
                    <Link to='/biblioteca'>
                        <a href="#">Biblioteca</a>
                    </Link>
                    <Link to='/plataformas'>
                        <a href="#">Plataforma</a>
                    </Link>
                </nav>
            </section>

            <section id='login'>
                <img id='img_usuario' src={Imagem_usuario}></img>
                <p id="usuario_font">Adailton Cerqueira</p>
                <p id="usuario_font2">Mestre <img id='img_classe' src={Img_classe}></img></p>
            </section>

        </div>
    );
}

export function Headerusuariobiblioteca() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="menu">
                <nav>
                    <Link to='/home'>
                        <a href="#">Home</a>
                    </Link>
                    <a href="#">Biblioteca</a>
                    <Link to='/plataformas'>
                        <a href="#">Plataforma</a>
                    </Link>
                </nav>
            </section>

            <section id='login'>
                <img id='img_usuario' src={Imagem_usuario}></img>
                <p id="usuario_font">Adailton Cerqueira</p>
                <p id="usuario_font2">Mestre <img id='img_classe' src={Img_classe}></img></p>
            </section>

        </div>
    );
}

export function Headerusuarioconfiguracao() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="menu">
                <nav>
                    <Link to='/home'>
                        <a href="#">Home</a>
                    </Link>
                    <Link to='/biblioteca'>
                        <a href="#">Biblioteca</a>
                    </Link>
                    <Link to='/plataformas'>
                        <a href="#">Plataforma</a>
                    </Link>
                </nav>
            </section>

            <section id='login'>
                <img id='img_usuario' src={Imagem_usuario}></img>
                <p id="usuario_font">Adailton Cerqueira</p>
                <p id="usuario_font2">Mestre <img id='img_classe' src={Img_classe}></img></p>
            </section>

        </div>
    );
}

export function Headerusuarioplataformas() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="menu">
                <nav>
                    <Link to='/home'>
                        <a href="#">Home</a>
                    </Link>
                    <Link to='/biblioteca'>
                        <a href="#">Biblioteca</a>
                    </Link>
                    <a href="#">Plataforma</a>
                </nav>
            </section>

            <section id='login'>
                <img id='img_usuario' src={Imagem_usuario}></img>
                <p id="usuario_font">Adailton Cerqueira</p>
                <p id="usuario_font2">Mestre <img id='img_classe' src={Img_classe}></img></p>
            </section>

        </div>
    );
}

export function Headerlogin() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="voltar_login">
                <nav>
                    <a href="#">Login</a>
                </nav>
            </section>

        </div>
    );
}

export function Headersuportelogincadastro() {
    return (
        <div id='header'>

            <section id="logotipo">
                <a href="#"><img src={Logo}></img></a>
                <a href="#">Control_Games</a>
            </section>

            <section id="voltar_login">
                <nav>
                    <a href="#">Login</a>
                </nav>
            </section>

        </div>
    );
}

