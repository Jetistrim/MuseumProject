import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AdmHeader = () => {
    const HeaderContainer = styled.header`
        align-items: center;
        justify-content: space-around;
        height: 100px;
        background-color: #0000009e;

        & div.logo {
            height: 60px;
            width: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
            transition-duration: 220ms;
            cursor: pointer;

            & img {
                height: 60%;
            }
        }

        & div.logo:hover {
            background-color: #80808043;
        }
    `;

    const navigate = useNavigate((local) => navigate(`/${local}`));
    // const ondeIr = ;

    return (
        <HeaderContainer className="flex justify-content-between">
            <div className="logo flex justify-content-center align-items-center ml-8">
                <img
                    className="logo"
                    src="images/SimpleLogoEye.png"
                    onClick={() => {
                        navigate("");
                    }}
                />
            </div>
        </HeaderContainer>
    );
};

export default AdmHeader;
