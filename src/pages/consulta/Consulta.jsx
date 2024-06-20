import Update from '../../components/Update/Update'

import { Section, Article, Wrapper, Title, Div, Label, Input, Button, Cadastros, Cadastro, Dados, Dado, Funcao, TelaUpdate, Popup } from "./StyleConsulta"

import axios from "axios"
import { useRef, useState } from "react"

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { IoMdCheckbox } from "react-icons/io";
import { TbCircleLetterXFilled } from "react-icons/tb";
import { MdError } from "react-icons/md";



export default function Consulta() {
    
    const nomeRef = useRef()
    const sobrenomeRef = useRef()
    const dataNascimentoRef = useRef()

    
    const [dadosUpdate, setDadosUpdate] =useState([])


    const [data,setData] = useState([])


    const [retorno,setRetorno] = useState()


    const handleFeedBack = (cor) => {

        const popup = document.querySelector('.popup')
        const barra = document.querySelector('.barra')

        popup.style.left = '10px'
        barra.style.animationName = 'barra'
        barra.style.backgroundColor = cor

        setTimeout(()=>{
            popup.style.left = '-400px'
        },5000)

        setTimeout(()=>{
            barra.style.animationName = 'none'
        },6000) 
    }



    const handleTodosCadastros = async () => {

        await axios.get('https://api-formulario-mongodb.onrender.com/formulario/cadastros')
        .then((response)=>{
            const data = response.data
            setData(data)
        })
        .catch(()=>{
            setRetorno(
                <p>
                    Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )

            const cor = '#cc0000'
            handleFeedBack(cor)
        })
    }


    const handleFiltroCadastros = async () => {

        if(nomeRef.current.value == '' && sobrenomeRef.current.value == '' && dataNascimentoRef.current.value == ''){

            setRetorno(
                <p>
                    Preencha algum campo para <br/> realizar a pesquisa por filtro.
                    <MdError className='alert'/>
                </p>
            )

            const cor = '#d0df00'
            handleFeedBack(cor)

        }
        
        
        else if(nomeRef.current.value !== '' || sobrenomeRef.current.value !== '' || dataNascimentoRef.current.value !== ''){

            const consulta = {}

            if(nomeRef.current.value !== ''){
                let nome = nomeRef.current.value

                consulta.nome = nome
            }

            if(sobrenomeRef.current.value !== ''){
                let sobrenome = sobrenomeRef.current.value

                consulta.sobrenome = sobrenome
            }

            if(dataNascimentoRef.current.value !== ''){
                let dataNascimento = dataNascimentoRef.current.value

                consulta.dataNascimento = dataNascimento
            }
           

            await axios.post('https://api-formulario-mongodb.onrender.com/formulario/consulta', consulta)
            .then((response)=>{

                if(response.data.length == 0){

                    setRetorno(
                        <p>
                            Cadastro não encontrado!
                            <MdError className='alert'/>
                        </p>
                    )

                    const cor = '#d0df00'
                    handleFeedBack(cor)

                }else if(response.data.length !== 0){

                    const data = response.data
                    setData(data)
                }
            })
            .catch(()=>{

                setRetorno(
                    <p>
                        Não foi possível realizar a consulta. <br/> Tente novamente mais tarde.
                        <TbCircleLetterXFilled  className="erro"/>
                    </p>
                )
    
                const cor = '#cc0000'
                handleFeedBack(cor)

            })

            nomeRef.current.value = ''
            sobrenomeRef.current.value = ''
            dataNascimentoRef.current.value = ''
        }
    }


    const handleDelete = async (itemId) => {

        const id = itemId

        await axios.delete('https://api-formulario-mongodb.onrender.com/formulario/deletar/' + id)
        .then((response)=>{

            if(response.status == 200){
                setRetorno(
                    <p>
                        Cadastro deletado com sucesso!
                        <IoMdCheckbox className="check"/>
                    </p>
                )

                const cor = '#00df00'
                handleFeedBack(cor)

                handleTodosCadastros()
            }
        })
        .catch(()=>{
            setRetorno(
                <p>
                    Não foi possível deletar. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )

            const cor = '#cc0000'
            handleFeedBack(cor)
        })
    }


    const handleShow = (item) => {
        const update = document.querySelector('.update')
        update.style.display = 'block'

        setDadosUpdate(item)
    }


    const handleUpdate = (num)=> {

        if(num == 1){
            setRetorno(
                <p>
                    Cadastro atualizado com sucesso!
                    <IoMdCheckbox className="check"/>
                </p>
            )
            
            const cor = '#00df00'
            handleFeedBack(cor)

        }else if(num == 2){
            setRetorno(
                <p>
                    Não foi possível atualizar. <br/> Tente novamente mais tarde.
                    <TbCircleLetterXFilled  className="erro"/>
                </p>
            )
    
            const cor = '#cc0000'
            handleFeedBack(cor)
        }
    }


    return (
        <>
            <Section>
                <Article>
                    <Title>Consulta</Title>
                    <Wrapper>
                        <Div>
                            <Label>Nome</Label>
                            <Input ref={nomeRef} type="text" name="name" placeholder="Digite o nome"/>
                        </Div>
                        <Div>
                            <Label>Sobrenome</Label>
                            <Input ref={sobrenomeRef} type="text" name="lastname" placeholder="Digite o sobrenome"/>
                        </Div>
                        <Div>
                            <Label>Data de nascimento</Label>
                            <Input ref={dataNascimentoRef} type="date" name="date"/>
                        </Div>
                    </Wrapper>

                    <Wrapper>

                        <Button onClick={handleFiltroCadastros}>
                            Consultar pelo filtro
                        </Button>

                        <Button onClick={handleTodosCadastros}>
                            Ver todos os cadastros
                        </Button>

                    </Wrapper>

                    <hr />

                    <Title>Resultado das pesquisas</Title>

                    <Cadastros>
                        {data.map((item,key)=>{
                            return (
                                <Cadastro key={key}>
                                    <Dados>
                                        <Dado>{item.nome}</Dado>
                                        <Dado>{item.sobrenome}</Dado>
                                        <Dado>{item.dataNascimento}</Dado>
                                        <Dado>{item.telefone}</Dado>
                                        <Dado>{item.email}</Dado>
                                    </Dados>

                                    <Funcao>
                                        <button className="btnUpdate" onClick={()=>handleShow(item)}>
                                            <FaPen />   
                                        </button>

                                        <button className="btnDelete" onClick={()=>handleDelete(item._id)} >
                                            <FaTrash />
                                        </button>
                                    </Funcao>
                                </Cadastro>
                            )
                        })}

                    </Cadastros>
                </Article>
                
                <TelaUpdate className='update'>
                    <Update dadosUpdate={dadosUpdate} todosCadastros={handleTodosCadastros} update={handleUpdate}/>
                </TelaUpdate>

                <Popup className="popup">
                    {retorno}
                    <hr  className="barra"/>
                </Popup>
                
            </Section>
        </>
    )
}
