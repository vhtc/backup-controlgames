import './stilos/formstyle.css';
// inicio vhtc
import axios from 'axios';
import { LocalServerUrl } from '../configuracao/LocalServer'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
// fim vhtc

export function Form_login() {
    // inicio vhtc
    const [nickname, setNickname] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await axios.post(`http://${LocalServerUrl}/usuarios/login`, { nickname, senha });
            alert(`Login bem-sucedido! Bem vindo: ${response.data.nickname}, você será redirecionado para o Control Games`);
            localStorage.setItem('usuarioLogado', response.data.nickname)
            console.log('Usuario Logado:', localStorage.getItem('usuarioLogado'))

            navigate('/home')
            setNickname('');
            setSenha('');

        } catch (error) {
            alert(`Erro ao fazer login: Usuario ou Senha incorretos`);
            setSenha('');

        } finally{
            console.log('finally')
        }
    };
    // fim vhtc

    return (
        <>
            <div id='container_login'>

                <div className="divisao">
                    <p>Login</p>
                    <div class="linha"></div>
                </div>

                <article className="form">
                    {/* editado vhtc - tirei o box_email da div e alterei o login para nickname ao invés de email 
                    tambem editei os inputs de acordo com o banco de dados prestar atenção nos nomes que estão sendo utilziados*/}
                    <div id="box_nickname">
                        <p>Nickname</p>
                        <input type="text" id="email_input" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    </div>

                    <div id="box_senha">
                        <p>Senha</p>
                        <input type="password" id="senha_input" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>

                    <div id="box_login">
                        <button id="botao_logar" type="submit" onClick={handleLogin}>Login</button>
                        {/* <a href="#">Esqueceu a senha ?</a> */}
                        <Link to='/cadastro'>
                            <a href="#">Ainda Não tem cadastro , Clique aqui !</a>
                        </Link>
                    </div>

                </article>

            </div>
        </>
    );
}

export function Form_cadastro() {

    // inicio vhtc
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const CriarUsuario = async () => {
        try {
            await axios.post(`http://${LocalServerUrl}/usuarios`, { nickname, email, senha });
            alert(`Usuario cadastrado com sucesso você será redirecionado para a tela de login`);

            setNickname('');
            setEmail('');
            setSenha('');
            navigate('/login')

        } catch (error) {
            console.error('Erro ao criar Usuario:');
            alert(`Erro ao criar Usuario, verifique se existe algum informação faltante ou usuário já existe`);
            setSenha('');
        }
    };
    // fim vhtc

    return (

        <div id='container_cadastro'>
            {/* editei o codigo para para ficar de acordo com os dados do banco de dados, perceba que tambem
            apaguei o repetir senha da tela cadastro, já que não criei a logica de repetir senha, não deve ser uma logica dificil
            pretendo criar essa logica assim que terminar de adicionar todo o backend no codigo */}
            <div class="divisao_cadastro">
                <p>Cadastro</p>
                <div class="linha_cadastro"></div>
            </div>

            <article class="form_cadastro">

                <div id="box_nickname">
                    <p>Nickname</p>
                    <input type="text" id="email" value={nickname} onChange={(e) => setNickname(e.target.value)} />
                </div>

                <div id="box_email">
                    <p>Email</p>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div id="box_senha">
                    <p>Senha</p>
                    <input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                {/* <div id="box_repetir_senha">
                    <p>Repetir Senha</p>
                    <input type="password" id="senha" />
                </div> */}

                <div id="box_cadastro">
                    <button type="submit" onClick={CriarUsuario}>Cadastrar</button>
                </div>

                <div id="box_voltar_login">
                    <Link to='/login'>
                        <a href="#">Fazer Login</a>
                    </Link>
                </div>

            </article>

        </div>
    );
}

export const Form_configuracao = () => {
    // inicio vhtc
    const [usuarios, setUsuarios] = useState([]);
    const [emailPadrao, setEmailPadrao] = useState([]);
    const [senhaPadrao, setSenhaPadrao] = useState([]);
    const usuarioLogado = localStorage.getItem('usuarioLogado')



    useEffect(() => {
        axios.get(`http://${LocalServerUrl}/usuarios`)
            .then(response => {
                setUsuarios(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Erro ao buscar Usuarios:', error);
            });
    }, []);

    useEffect(() => {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.nickname === usuarioLogado)
    
        if (usuarioEncontrado) {
            setEmailPadrao(usuarioEncontrado.email)
            setSenhaPadrao(usuarioEncontrado.senha) 
        }
    
    }, [usuarios, usuarioLogado]);

    

    const navigate = useNavigate()

    const deslogar = () => {
        localStorage.setItem('usuarioLogado', '')
        navigate('/login')
    }



    //   const [usuarioLogado, setUsuarioLogado] = useState('');
    const [novoEmail, setNovoEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const handleAtualizarDados = async () => {
        try {
            // Criar um objeto para armazenar apenas os campos preenchidos
            const dadosAtualizados = {};
            if (novoEmail !== '') dadosAtualizados.email = novoEmail;
            else {
                dadosAtualizados.email = emailPadrao
                console.log(emailPadrao)
            }

            if (novaSenha !== '') dadosAtualizados.senha = novaSenha;
            else {
                dadosAtualizados.senha = senhaPadrao
                console.log(senhaPadrao)
            }

            if(novoEmail === '' && novaSenha ==='') alert('Campos em branco')
            // Verificar se há algo para atualizar
            if (Object.keys(dadosAtualizados).length === 0) {
                console.log('Nenhum dado para atualizar.');
                return;
            }

            // Fazer a requisição para atualizar os dados no backend
            const response = await axios.put(
                `http://${LocalServerUrl}/usuarios/${usuarioLogado}`,
                {
                    nickname: usuarioLogado,
                    ...dadosAtualizados,
                }
            );

            // Verificar se a atualização foi bem-sucedida
            if (response.status === 200) {
                console.log('Dados atualizados com sucesso!');
                // Lógica adicional, se necessário
            } else {
                console.log('Erro ao atualizar dados.');
                // Lidar com erros, se necessário
            }
        } catch (error) {
            console.error('Erro ao processar a requisição:', error);
        }
    };
    

    return (

        <div>
            <label>
                Nickname:
                <input
                    type="text"
                    value={usuarioLogado}
                    placeholder={usuarioLogado}
                />
            </label>
            <br />
            <label>
                Novo Email:
                <input
                    type="text"
                    value={novoEmail}
                    onChange={(e) => setNovoEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Nova Senha:
                <input
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                />
            </label>
            <br />
            <button onClick={handleAtualizarDados}>Atualizar Dados</button>
        </div>
    );
};    