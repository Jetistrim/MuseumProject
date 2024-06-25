import styled from "styled-components";

const Home = () => {
    const DivContainer = styled.div`
        /* height: 400px; */
    `;

    return (
        <DivContainer className="flex justify-content-center flex-column align-items-center bg-gray-300 px-3 p-3">
            <div>
                <h2 className="text-0">batata</h2>
                <p className="text-100 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero aspernatur culpa fugit, odio enim iusto corrupti
                    voluptate porro, qui, eius illum nulla laborum labore? Eos
                    nemo excepturi iure voluptas atque?
                </p>
            </div>
            <div className="flex gap-1 text-100">
                <div>
                    <h2 className="text-0">Outra Batata</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid dolorem assumenda possimus, atque omnis sit
                        deserunt veritatis beatae. Ratione fugiat nam labore
                        natus ipsa eius perferendis modi nostrum expedita
                        blanditiis!
                    </p>
                </div>
                <div>
                    <h2 className="text-0" >Terceira Batata</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, nisi. Quam magnam error deserunt molestiae
                        ducimus nostrum nemo inventore expedita, fugiat sunt
                        similique delectus sequi ad reiciendis illum dolores!
                        Eligendi.
                    </p>
                </div>
            </div>
            <div className="w-max flex align-items-center justify-content-center m-2">
                <img src="./images/batata.png" alt="" className="w-full border-circle"/>
            </div>
        </DivContainer>
    );
};

export default Home;
