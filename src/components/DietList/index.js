import React from "react";
import "./style.css";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useCalculate } from "../../contexts/CalculateContext";

function DietList() {
  const { clickBtn, setClickBtn } = useCalculate();

  if (clickBtn === true) {
    setTimeout(() => {
      setClickBtn(false);
    }, 4000);

    return (
      <div className="gifFrame">
        <iframe
          className="gif"
          src="https://giphy.com/embed/daak2Jqk5NZN2G4PKD"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  } else if (clickBtn === false) {
    return (
      <Container>
        <Row>
          <Col>
            <div className="tableFrame">
              <div className="dayTitle">1.GÜN </div>
              <Table hover size="sm" className="tableList">
                <tbody>
                  <tr>
                    <td className="timeDay">
                      <span>SABAH :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Yumurta</p>
                      <p>1 Dilim Beyaz Peynir</p>
                      <p>4-5 Adet Zeytin</p>
                      <p>Salatalık / Domates / Yeşillik</p>
                      <p>2 Dilim Kepek Ekmek</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Armut</p>
                      <p>1 Adet Galeta</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>ÖĞLE :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Kase Mercimek Çorbası</p>
                      <p>Izgara Balık</p>
                      <p>Bol Salata</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>5-6 Adet Çiğ Badem</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>AKŞAM :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Tabak Zeytinyağlı Ispanak</p>
                      <p>1 Kase Yoğurt </p>
                      <p>Bol Saalata </p>
                      <p>1 Dilim Kepek Ekmek </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>3 Adet Kuru Kayısı</p>
                      <p>1 Bardak Süt</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col>
            <div className="tableFrame">
              <div className="dayTitle">2.GÜN </div>
              <Table hover size="sm" className="tableList">
                <tbody>
                  <tr>
                    <td className="timeDay">
                      <span>SABAH :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Yumurta</p>
                      <p>1 Dilim Beyaz Peynir</p>
                      <p>4-5 Adet Zeytin</p>
                      <p>Salatalık / Domates / Yeşillik</p>
                      <p>2 Dilim Kepek Ekmek</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Armut</p>
                      <p>1 Adet Galeta</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>ÖĞLE :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Kase Mercimek Çorbası</p>
                      <p>Izgara Balık</p>
                      <p>Bol Salata</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>5-6 Adet Çiğ Badem</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>AKŞAM :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Tabak Zeytinyağlı Ispanak</p>
                      <p>1 Kase Yoğurt </p>
                      <p>Bol Saalata </p>
                      <p>1 Dilim Kepek Ekmek </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>3 Adet Kuru Kayısı</p>
                      <p>1 Bardak Süt</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col>
            <div className="tableFrame">
              <div className="dayTitle">3.GÜN </div>
              <Table hover size="sm" className="tableList">
                <tbody>
                  <tr>
                    <td className="timeDay">
                      <span>SABAH :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Yumurta</p>
                      <p>1 Dilim Beyaz Peynir</p>
                      <p>4-5 Adet Zeytin</p>
                      <p>Salatalık / Domates / Yeşillik</p>
                      <p>2 Dilim Kepek Ekmek</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Adet Armut</p>
                      <p>1 Adet Galeta</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>ÖĞLE :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Kase Mercimek Çorbası</p>
                      <p>Izgara Balık</p>
                      <p>Bol Salata</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>5-6 Adet Çiğ Badem</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>AKŞAM :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>1 Tabak Zeytinyağlı Ispanak</p>
                      <p>1 Kase Yoğurt </p>
                      <p>Bol Saalata </p>
                      <p>1 Dilim Kepek Ekmek </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="timeDay">
                      <span>Ara :</span>
                    </td>
                    <td colSpan="4" className="foodList">
                      <p>3 Adet Kuru Kayısı</p>
                      <p>1 Bardak Süt</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default DietList;
