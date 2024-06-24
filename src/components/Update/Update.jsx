
// IMPORTE DE BIBLIOTECAS
import axios from "axios"
import { useEffect, useRef } from "react"


// IMPORTE DAS TAGS ESTILIZADAS
import { Label, Input, Form, Wrapper, Div, Title, Button, Section, Botoes } from "./StyleUpdate"


// IMPORTA A TAG PARA PODER SER MANIPULADA
import { TelaUpdate } from "../../pages/consulta/StyleConsulta"


export default function Update(props) {


    // useRef QUE RECEBE OS VALORES DOS IMPUTS DA ATUALIZAÇÃO
    const nomeRef = useRef()
    const sobrenomeRef = useRef()
    const dataNascimentoRef = useRef()
    const telefoneRef = useRef()
    const emailRef = useRef()


    // FUNÇÃO QUE PEGA A TAG IMPORTADA E MANIPULA SUA APARIÇÃO (FECHA A TELA DE ATUALIZAÇÃO)
    const handleClose = () => {
        <TelaUpdate className="update"/>
        const update = document.querySelector(".update")
        update.style.display = 'none'
    }  


    // useEffect PARA PEGAR TODOS OS DADOS DO CADASTRO QUE DESEJA ATUALIZAR
    useEffect(()=>{
        nomeRef.current.value = props.dadosUpdate.nome
        sobrenomeRef.current.value = props.dadosUpdate.sobrenome
        dataNascimentoRef.current.value = props.dadosUpdate.dataNascimento
        telefoneRef.current.value = props.dadosUpdate.telefone
        emailRef.current.value = props.dadosUpdate.email
    })


    // FUNÇÃO QUE FAZ O ENVIO E REALIZA A ATUALIZAÇÃO
    const handleSubmit = async () => {

        const id = props.dadosUpdate._id
        

        // RECEBE OS VALORES DOS IMPUTS PARA REALIZAR A ATUALIZAÇÃO
        const data = {
            nome: (nomeRef.current.value),
            sobrenome: (sobrenomeRef.current.value),
            dataNascimento: (dataNascimentoRef.current.value),
            telefone: (telefoneRef.current.value),
            email: (emailRef.current.value),
        }

        await axios.patch('https://api-formulario-mongodb.onrender.com/formulario/atualizar/' + id, data)
        .then((response)=>{
            if(response.status == 200){
                handleClose()
                props.update(1)
                props.todosCadastros()
            }
        })
        .catch(()=>{
            handleClose()
            props.update(2)
        })
    }


    return (
        <>
            <Section>
                <Form>

                    {/* ÁREA PARA ATUALIZAR CADASTRO */}
                    <Title>Atualizar</Title>
                    <Wrapper>
                        <Div>
                            <Label>Nome</Label>
                            <Input ref={nomeRef}  type="text" name="name" required/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input ref={sobrenomeRef} type="text" name="lastname" required/>
                        </Div>
                    </Wrapper>
                    <Wrapper>
                        <Div>
                            <Label>Data de nascimento</Label>
                            <Input ref={dataNascimentoRef} type="date" name="date" required/>
                        </Div>
                        <Div>
                            <Label>Telefone</Label>
                            <Input ref={telefoneRef} type="text" name="phone" required/>
                        </Div>
                    </Wrapper>
                    <Wrapper>
                        <Div>
                            <Label>E-mail</Label>
                            <Input ref={emailRef} type="email" name="email" required/>
                        </Div>
                    </Wrapper>
                    <Botoes>
                        <Button onClick={handleSubmit}>Atualizar</Button>
                        <Button onClick={handleClose}>Cancelar</Button>
                    </Botoes>
                </Form>
            </Section>
        </>
    )
}

