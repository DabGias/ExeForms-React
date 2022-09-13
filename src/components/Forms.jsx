import { useState } from "react"
import { FormsStyle, DivFichas } from "../styled"

function Forms() {
    const [cliente, setCliente] = useState({"nomeCliente" : "", "telefoneCliente" : ""})
    const [listaClientes, setListaClientes] = useState([])
    const [animal, setAnimal] = useState({"nomeAnimal" : "", "idadeAnimal" : "", "racaAnimal" :"", "tamanhoAnimal" : ""})
    const [listaAnimais, setListaAnimais] = useState([])

    function cadClienteEAnimal(e) {
        setCliente({...cliente, [e.target.name] : [e.target.value]})
        setAnimal({...animal, [e.target.name] : [e.target.value]})
    }

    function geraFichas(e) {
        e.preventDefault()
        setListaClientes([...listaClientes, cliente])
        setListaAnimais([...listaAnimais, animal])
    }
    
    return(
        <>
            <FormsStyle onSubmit={geraFichas}>
                <fieldset>
                    <legend>Cadastro</legend>

                    <label>Nome do animal
                        <input type={"text"} name="nomeAnimal" onChange={cadClienteEAnimal}/>
                    </label>

                    <label>Idade do animal
                        <input type={"number"} min={1} name="idadeAnimal" onChange={cadClienteEAnimal}/>
                    </label>

                    <label>Raça do animal
                        <input type={"text"} name="racaAnimal" onChange={cadClienteEAnimal}/>
                    </label>

                    <label>Tamanho do animal
                        <input type={"number"} min={1} name="tamanhoAnimal" onChange={cadClienteEAnimal}/>
                    </label>

                    <label>Nome do dono
                        <input type={"text"} name="nomeCliente" onChange={cadClienteEAnimal}/>
                    </label>

                    <label>Telefone
                        <input type={"tel"} name="telefoneCliente" onChange={cadClienteEAnimal}/>
                    </label>

                    <div className="divButton">
                        <button type="submit">Cadastrar</button>
                    </div>
                </fieldset>
            </FormsStyle>
            <DivFichas>
                {
                    listaClientes.map((cli, indexCliente) =>
                        <div className="fichaCliente" key={indexCliente}>
                            <h1>Cliente</h1>

                            <p>Nome: {cli.nomeCliente}</p>
                            <p>Tel.: {cli.telefoneCliente}</p>
                        </div>
                    )
                }
            </DivFichas>
            <DivFichas>
                {              
                    listaAnimais.map((ani, indexAnimal) =>
                        <div className="fichaAnimal" key={indexAnimal}>
                            <h1>Animal</h1>

                            <p>Nome: {ani.nomeAnimal}</p>
                            <p>Idade: {ani.idadeAnimal}</p>
                            <p>Raça: {ani.racaAnimal}</p>
                            <p>Tamanho: {ani.tamanhoAnimal}</p>
                        </div>
                    )
                }
            </DivFichas>
        </>
    )
}

export default Forms