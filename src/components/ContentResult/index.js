import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { useCalculate } from "../../contexts/CalculateContext";
import { useEffect } from "react";

const StyledButton = styled.button`
  background: #4a4a4a;
  color: white;
  font-size: 1.3em;
  margin-top: 15px;
  padding: 0.25em 1em;

  border-radius: 10px;
  font-weight: 400;
  &:hover {
    opacity: 0.8;
  }
`;

function ContentResult() {
  const { lastUserData, setLastUserData, setClickBtn } = useCalculate();

  const dietBtnClick = () => {
    setClickBtn(true);

    setTimeout(() => {
      window.scrollTo(0, 1550);
    }, 100);
  };

  if (lastUserData === null) {
    return <div></div>;
  } else {
    return (
      <Container className="mt-2 containerRes p-4 ">
        <Row>
          <Col>
            <div className="resBalon ">
              <p>Boy Kilo Endeksi (BMI)</p>
              <span>{lastUserData.bmi} kg/m2</span>
            </div>
          </Col>
          <Col>
            <div>
              <span className="idealWeight"> {lastUserData.status} </span>
              <span className="weightPost ">
                {lastUserData.description}
                <br />
                <br />
                <p className="h4">Senin İçin Hazırlanmış</p>
              </span>
              <StyledButton onClick={dietBtnClick}>
                Diyet Listeni Görmek için Hemen Tıkla
              </StyledButton>
            </div>
          </Col>
          <Col>
            <div className="resBalon">
              <p>
                İdeal <br />
                BMI Değeriniz
              </p>

              <span>
                {lastUserData.idealBmi}
                kg/m2
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentResult;
