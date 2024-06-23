
// IMPORTE DAS TAGS ESTILIZADAS
import { Rodape, Logo, Div, Wrapper } from "./StyleFooter"

export default function Footer() {
    return (
        <>
            <Rodape>
                <hr />
                <Wrapper>
                    <Div>
                        <Logo>Logo</Logo>
                        <p>&copy; Renato Gomes</p>
                    </Div>
                </Wrapper>
            </Rodape>
        </>
    )
}