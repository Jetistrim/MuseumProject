import styled from "styled-components";

const Home = () => {
  const DivContainer = styled.div`
    height: 400px;
  `;

  return (
    <DivContainer className="flex justify-content-center bg-gray-300">
      <div className="w-8">
        <h2 className="text-0">batata</h2>
        <p className="text-100 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aspernatur culpa fugit, odio enim iusto corrupti voluptate porro, qui, eius illum nulla laborum labore? Eos nemo excepturi iure voluptas atque?</p>
      </div>
    </DivContainer>
  );
};

export default Home;
