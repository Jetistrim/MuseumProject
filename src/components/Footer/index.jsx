import styled from "styled-components";

const Footer = () => {
    const FooterContainer = styled.footer`
        background-color: #0000009e;
        align-self: end;
    `;

    return (
        <FooterContainer className="w-12 flex justify-content-center">
            <h5 className="flex text-center">
                © 2024 Todos os direitos reservados
            </h5>
        </FooterContainer>
    );
};

export default Footer;
