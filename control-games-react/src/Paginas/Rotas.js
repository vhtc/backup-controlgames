import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Paginabiblioteca from "./paginabiblioteca";
import Paginaconfiguracao from './paginaconfiguracao'
import Paginagame from './paginagame'
import Paginalogin from './paginalogin'
import { Form_cadastrojogo } from "../componentes/Formulariocadastrojogo";
import Paginaplataformas from "./paginaplataformas";
import Paginahome from "./paginahome";
// import Paginalogin from './paginalogin'
import Paginacadastro from './paginacadastro'


import Paginasuporte from './paginasuporte'








const Rotas = () => {
    return (
        <Router>
            <Routes>
                <Route exact path={"/home"} element={<Paginahome/>}/>
                <Route exact path={"/plataformas"} element={<Paginaplataformas/>}/>
                <Route exact path={"/login"} element={<Paginalogin/>}/>
                <Route exact path={"/cadastro"} element={<Paginacadastro/>}/>
                <Route exact path={"/"} element={<Paginalogin/>}/>
                <Route exact path={"/biblioteca"} element={<Paginabiblioteca/>}/>
                <Route exact path={"/suporte"} element={<Paginasuporte/>}/>
                <Route exact path={"/configuracao"} element={<Paginaconfiguracao/>}/>
                <Route exact path={"/game"} element={<Paginagame/>}/>
                <Route exact path={"/cadastro-jogo"} element={<Form_cadastrojogo/>}/>


            </Routes>
        </Router>
    )
}

export default Rotas;