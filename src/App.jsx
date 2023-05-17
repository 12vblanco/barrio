import { styled } from "styled-components";
import img1 from "./assets/menu1.png";
import img2 from "./assets/menu2.png";

function App() {
  return (
    <Container>
      <Div>{/* <H1>Bar Rio KRBC</H1> */}</Div>
      <Div>
        <Img src={img1} alt="menu 1" />
        <Img src={img2} alt="menu 2" />
      </Div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100vw;
  background: #fff;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
// const H1 = styled.h1`
//   font-size: 64px;
//   color: black;
//   font-weight: 700;
//   font-family: "Roboto, san";
//   margin: 8px;
// `;

const Img = styled.img`
  width: auto;
  min-width: 340px;
  height: 100vh;
  margin: 0 40px 40px 40px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 770px) {
    width: 100%;
    height: auto;
    min-width: 340px;
    margin-top: 22px;
  }
`;

export default App;
