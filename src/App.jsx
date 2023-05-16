import { styled } from "styled-components";
import img1 from "./assets/menu1.png";
import img2 from "./assets/menu2.png";

function App() {
  return (
    <Container>
      <Div>
        <H1>Bar Rio KRBC</H1>
      </Div>
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
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  background: #ff48a5;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  width: 100vw;
  background: #ff48a5;
`;
const H1 = styled.h1`
  font-size: 64px;
  color: black;
  font-weight: 700;
  font-family: "Roboto, san";
`;

const Img = styled.img`
  width: 50vw;
  max-width: 400px;
  height: 100%;
  max-height: 400px;
  margin: 0 40px 40px 40px;
  object-fit: cover;
`;

export default App;
