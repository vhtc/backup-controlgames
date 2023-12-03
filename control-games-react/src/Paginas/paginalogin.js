import { Headerlogin } from '../componentes/Header'
import { Form_login } from '../componentes/Formularios'
import { Footer_interno } from '../componentes/Footer'
import './stilos/Paginalogin.css'

const Paginalogin = () => {
    return (
        <div className='vhtc'>
                <div>
                    <Headerlogin />
                </div>

                <div id='form'>
                    <Form_login />
                </div>

                <div id='footer01'>
                    <Footer_interno />
                </div>
        </div>
    )
}

export default Paginalogin