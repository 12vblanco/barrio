import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import img1 from "./assets/menu1.jpeg";
import img2 from "./assets/menu2.jpeg";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    const colors = [
      "#FF5733",
      "#33FF57",
      "#5733FF",
      "#FF33B8",
      "#33B8FF",
      "#B8FF33",
      "#FF3333",
      "#33FF33",
      "#3333FF",
      "#FFFF33",
      "#33FFFF",
      "#FF33FF",
      "#66FF33",
      "#3366FF",
      "#FF6633",
    ];
    const colorIndex = (dayOfMonth - 1) % colors.length;
    const selectedColor = colors[colorIndex];
    setBackgroundColor(selectedColor);
  }, []);

  return (
    <Container style={{ background: backgroundColor }}>
      <Div>
        <Image>
          <Logo src={logo} alt="El logo del Bar Rio" />
          <Img src={img1} alt="menu 1" />
        </Image>
        <Image>
          <Img src={img2} alt="menu 2" />
        </Image>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  @media (max-width: 770px) {
    height: fit-content;
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
  }
`;

const Img = styled.img`
  width: auto;
  min-width: 340px;
  height: 90vh;
  margin: 22px;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: 770px) {
    width: 100%;
    height: auto;
    min-width: 340px;
    margin: 0;
    padding: 22px;
  }
  @media (max-width: 400px) {
  }
`;

const Logo = styled.img`
  width: 88px;
  position: absolute;
  top: 2%;
  left: 80%;
  transform: rotate(25deg);
  @media (max-width: 400px) {
    width: 88px;
    position: absolute;
    top: 30px;
    left: 230px;
    transform: rotate(25deg);
  }
`;

export default App;
