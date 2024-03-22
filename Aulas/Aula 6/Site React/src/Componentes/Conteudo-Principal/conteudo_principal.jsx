import Info_Pessoais from '../Info-Pessoais/Info_Pessoais'
import Habilidades from '../Habilidades/Habilidades'
import Form_Contato from '../Form-Contato/Form_Contato'

function Conteudo_Principal() {
    return(
        <div class="mainInfo">
            <section id="info">
                <Info_Pessoais/>
                <Habilidades/>
            </section>
            <Form_Contato/>
        </div>
    )
}

export default Conteudo_Principal