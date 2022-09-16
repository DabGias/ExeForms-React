import { useState } from "react"
import { FormsStyle, DivFichas } from "../styled"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
    nomeAnimal : yup.string().required("O nome do animal é um campo obrigatório."),
    idadeAnimal : yup.number().min(0, "A idade deve ser um número e maior que 0.").required("A idade do animal é um campo obrigatório."),
    racaAnimal : yup.string().required("A raça do animal é um campo obrigatório."),
    tamanhoAnimal : yup.number().min(0, "O tamanho tem que ser um número.").required("O tamanho da animal é um campo obrigatório."),
    nomeCliente : yup.string().required("O nome do dono/cliente é obrigatório."),
    telCliente : yup.string().required("O telefone do dono/cliente é obrigatório.")
}).required()


function Forms() {
    const {register, handleSubmit, formState : {errors}, setValue, setFocus} = useForm({
        resolver : yupResolver(schema)
    })

    const [listaClientes, setListaClientes] = useState([])
    const [listaAnimais, setListaAnimais] = useState([])

    function geraFichas(cliente, animal) { 
        setListaClientes([...listaClientes, cliente])
        setListaAnimais([...listaAnimais, animal])
    }

    function buscarCep(e) {
        const cep = e.target.value.replace(/\D/g, "")

        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => res.json())
            .then(data => {
                setValue("rua", data.logradouro)
                setValue("bairro", data.bairro)
                setValue("cidade", data.localidade)
                setValue("estado", data.uf)
                setFocus("numero")
            })
    }
    
    return(
        <>
            <FormsStyle onSubmit={handleSubmit(geraFichas)}>
                <fieldset>
                    <legend>Cadastro</legend>

                    <label>Nome do animal
                        <input type={"text"} {...register("nomeAnimal")}/>
                        <span>{errors.nomeAnimal?.message}</span>
                    </label>

                    <label>Idade do animal
                        <input type={"number"} {...register("idadeAnimal")}/>
                        <span>{errors.idadeAnimal?.message}</span>
                    </label>

                    <label>Raça do animal
                        <input type={"text"} {...register("racaAnimal")}/>
                        <span>{errors.racaAnimal?.message}</span>
                    </label>

                    <label>Tamanho do animal
                        <input type={"number"} {...register("tamanhoAnimal")}/>
                        <span>{errors.tamanhoAnimal?.message}</span>
                    </label>

                    <label>Nome do dono
                        <input type={"text"} {...register("nomeCliente")}/>
                        <span>{errors.nomeCliente?.message}</span>
                    </label>

                    <label>Telefone
                        <input type={"tel"} {...register("telCliente")}/>
                        <span>{errors.telCliente?.message}</span>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>

                    <label>CEP:
                        <input type={"text"} {...register("cep")} onBlur={buscarCep}/>
                    </label>

                    <label>Rua:
                        <input type={"text"} {...register("rua")}/>
                    </label>

                    <label>Número:
                        <input type={"text"} {...register("numero")}/>
                    </label>

                    <label>Bairro:
                        <input type={"text"} {...register("bairro")}/>
                    </label>

                    <label>Cidade:
                        <input type={"text"} {...register("cidade")}/>
                    </label>

                    <label>Estado:
                        <input type={"text"} {...register("estado")}/>
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
                            <p>Rua: {cli.rua}, {cli.numero}</p>
                            <p>Bairro: {cli.bairro}</p>
                            <p>Cidade: {cli.cidade} - {cli.estado}</p>
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