import { useEffect, useState } from "react";
import { styled } from "styled-components";
import img1 from "./assets/menu1.png";
import img2 from "./assets/menu2.png";

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
        <Img src={img1} alt="menu 1" />
        <Img src={img2} alt="menu 2" />
      </Div>{" "}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: 100vw;
  height: 100vh;
  @media (max-width: 770px) {
    height: fit-content;
  }
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: 770px) {
    width: 100%;
    height: 100%;
    min-width: 340px;
    margin-top: 22px;
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
  }
`;

export default App;
