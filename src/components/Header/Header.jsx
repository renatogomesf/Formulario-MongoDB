
// IMPORTE DAS TAGS ESTILIZADAS
import { Ul, Wrapper, Logo, Li, Topo } from "./StyleHeader"


// IMPORTE DO REACT-ROUTER-DOM
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <Topo>
                <Wrapper>
                    <Logo>Logo</Logo>
                    <Ul>
                        <Link className="link" to={"/Formulario-MongoDB"}>
                            <Li>
                                Cadastro
                                <hr />
                            </Li>
                        </Link>
                        <Link className="link" to={"/Consultar"}>
                            <Li>
                                Consulta
                                <hr />
                            </Li>
                        </Link>
                    </Ul>
                </Wrapper>
            </Topo>
        </>
    )
}