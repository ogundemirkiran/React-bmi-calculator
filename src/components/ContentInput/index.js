import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Weight from "../../icons/weight-loss.png";
import Height from "../../icons/height-limit.png";
import Age from "../../icons/parental-control.png";
import Female from "../../icons/female-student.png";
import Male from "../../icons/male-student.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCalculate } from "../../contexts/CalculateContext";

const StyledInput = styled.input`
  padding: 0.5em;
  background: #f6f7eb;
  border: none;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  background: white;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 3px solid white;
  border-radius: 5px;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;

const validationSchema = Yup.object({
  weight: Yup.number().min(2).required("Zorunlu alan"),
  height: Yup.number().min(2).required("Zorunlu alan"),
  age: Yup.number().min(2).required("Zorunlu alan"),
  gender: Yup.string().required("Zorunlu alan"),
});

function ContentInput() {
  const { setUserData } = useCalculate();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      weight: "",
      height: "",
      age: "",
      gender: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let dataHeight = values.height.split("");
      dataHeight.splice(1, 0, ".");
      let newHeight = dataHeight.join("");

      const newValues = {
        weight: Number(values.weight),
        height: Number(newHeight),
        age: Number(values.age),
        gender: values.gender,
      };
      setUserData(newValues);

      setTimeout(() => {
        window.scrollTo(0, 700);
      }, 500);
    },
  });

  return (
    <div className="containerInput">
      <hr className="contentHr"></hr>
      <hr className="contentHr"></hr>
      <Container>
        <Row>
          <Col className="bgContent" id="bgContent1" sm={4}>
            <div className="mt-5">
              <p className="h5 textInfo">
                Basitçe, bir kişinin kilosunu, boyunun karesine böleriz. Örneğin
                180 santimetre boya ve 85 kilogram ağırlığa sahip bir erkeğin
                Vücut Kitle Endeksi (BMI) 26.23'tür. 160 santimetre boya ve 65
                kilogram ağırlığa sahip bir kadının BMI değeri 25.39'dur.
              </p>
            </div>
          </Col>
          <Col className="bgContent" id="bgContent2" sm={8}>
            <div className="mb-n3">
              <h5 className=" d-inline bg-danger rounded-pill p-2">
                VUCUT KİTLE ENDEKSİ HESAPLAMA
              </h5>
            </div>

            <form className="borderFrame" onSubmit={handleSubmit}>
              <div className="mt-3">
                <label htmlFor="weight" className="textLabel d-block ">
                  Kilonuz
                </label>
                <img className="inputIcons" alt="weightImg" src={Weight}></img>

                <StyledInput
                  name="weight"
                  onChange={handleChange}
                  value={values.weight}
                ></StyledInput>
              </div>
              {errors.weight ? (
                <small className="ml-5 text-danger">
                  En Az İki Haneli ve Rakam Olmalı{" "}
                </small>
              ) : null}
              <br />

              <div>
                <label htmlFor="height" className="textLabel d-block ">
                  Boyunuz
                </label>
                <img className="inputIcons" alt="heightImg" src={Height}></img>

                <StyledInput
                  name="height"
                  onChange={handleChange}
                  value={values.height}
                ></StyledInput>
              </div>

              {errors.height ? (
                <small className="ml-5 text-danger">
                  En Az İki Haneli ve Rakam Olmalı{" "}
                </small>
              ) : null}
              <br />

              <div>
                <label htmlFor="age" className="textLabel d-block ">
                  Yaşınız
                </label>
                <img className="inputIcons" alt="ageImg" src={Age}></img>

                <StyledInput
                  name="age"
                  onChange={handleChange}
                  value={values.age}
                ></StyledInput>
              </div>

              {errors.age ? (
                <small className="ml-5 text-danger">
                  En Az İki Haneli ve Rakam Olmalı{" "}
                </small>
              ) : null}

              <br />

              <div className="inputGender">
                <div>
                  <img
                    className="inputIcons"
                    alt="femaleImg"
                    src={Female}
                  ></img>
                  <span className="mr-1">Kadın</span>

                  <StyledInput
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={values.gender === "female"}
                  ></StyledInput>
                </div>
                <div>
                  <img
                    className="inputIcons  ml-4"
                    alt="maleImg"
                    src={Male}
                  ></img>

                  <span className="mr-1">Erkek</span>
                  <StyledInput
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={values.gender === "male"}
                  ></StyledInput>
                </div>
              </div>
              <br />
              <StyledButton type="submit">HESAPLA</StyledButton>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentInput;
