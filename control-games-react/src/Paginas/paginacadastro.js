import { Headerlogin } from '../componentes/Header'
import { Form_cadastro } from '../componentes/Formularios'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginacadastro.css'

const Paginacadastro = () => {
    return (
        <>
                <div>
                    <Headerlogin />
                </div>

                <div id='form'>
                    <Form_cadastro />
                </div>

                <div id='footer01'>
                    <Footer_interno />
                </div>
        </>

    )
}

export default Paginacadastro