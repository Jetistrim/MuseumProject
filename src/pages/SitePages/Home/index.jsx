import styled from "styled-components";
import HomeTexts from "../../../components/homeTexts";

const Home = () => {
    const DivContainer = styled.div`
        margin-top: 200px;
        #caixa-flutuante {
            
        }
    `;

    return (
        <DivContainer className="flex flex-column">
            <div id="caixa-flutuante" className="flex align-self-end bg-gray-500 w-23rem p-4 mr-8 border-round">
            </div>
            <div className="flex justify-content-center flex-column align-items-center bg-gray-300 px-3 p-3">
                <HomeTexts />
                <div className="w-max flex align-items-center justify-content-center m-2">
                    <img
                        src="./images/batata.png"
                        alt="batata"
                        className="w-full border-circle"
                    />
                </div>
            </div>
        </DivContainer>
    );
};

export default Home;
