import { Headerusuarioconfiguracao} from '../componentes/Header'
import { Form_configuracao } from '../componentes/Formularios'
// import { AtualizarDados, Form_configuracao } from '../componentes/Formularios'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginaconfiguracao.css'

const Paginaconfiguracao = () => {
    return (
        <>
            
                <div>
                    <Headerusuarioconfiguracao />
                </div>
                
                <div id='form'>
                    <Form_configuracao />
                </div>

                <div id='footer01'>
                    <Footer_interno />
                </div>
            
        </>

    )
}

export default Paginaconfiguracao