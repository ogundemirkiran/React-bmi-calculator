import { createContext, useContext, useState, useEffect } from "react";

const CalculateContext = createContext();

const CalculateProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const [clickBtn, setClickBtn] = useState(null);

  const [lastUserData, setLastUserData] = useState({
    weight: "",
    height: "",
    age: "",
    gender: "",
    bmi: "NaN",
    status: "",
    description: "",
    idealBmi: "",
  });

  useEffect(() => {
    let height2 = userData.height * userData.height;
    let resBmi = userData.weight / height2;
    let newBmi = String(resBmi).slice(0, 4);

    let status = "";
    let description = "";
    let idealBmi = "";

    //BMI değerine göre uygun açıklamalar
    if (0 <= newBmi && newBmi <= 18.4) {
      status = "Zayıf";
      description =
        " Zayıflık, bazı hastalıklar için risk oluşturan ve istenmeyen bir durumdur. Boyunuza uygun ağırlığa erişmeniz için yeterli ve dengeli beslenmeli, beslenme alışkanlıklarınızı geliştirmeye özen göstermelisiniz.";
    } else if (18.5 <= newBmi && newBmi <= 24.9) {
      status = "Normal Kilo";
      description =
        "Boyunuza göre uygun ağırlıkta olduğunuzu gösterir. Yeterli ve dengeli beslenerek ve düzenli fiziksel aktivite yaparak bu ağırlığınızı korumaya özen gösteriniz.";
    } else if (25 <= newBmi && newBmi <= 29.9) {
      status = "İdeal Kilonun Üzerindesiniz";
      description =
        "Boyunuza göre vücut ağırlığınızın fazla olduğunu gösterir. Fazla kilolu olma durumu gerekli önlemler alınmadığı takdirde pek çok hastalık için risk faktörü olan obeziteye (şişmanlık) yol açar.";
    } else if (30 <= newBmi && newBmi <= 34.9) {
      status = "Şişman (Obez) - I. Sınıf";
      description =
        "Şişmanlık, kalp-damar hastalıkları, diyabet, hipertansiyon v.b. kronik hastalıklar için risk faktörüdür. Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir.";
    } else if (35 <= newBmi && newBmi <= 44.9) {
      status = "Şişman (Obez) - II. Sınıf";
      description =
        "Acilen Bir sağlık kuruluşuna başvurarak hekim / diyetisyen kontrolünde zayıflayarak normal ağırlığa inmeniz sağlığınız açısından çok önemlidir.";
    } else if (45 <= newBmi) {
      status = "Aşırı Şişman (Aşırı Obez) - III. Sınıf";
      description = "Çok Çok Acil hekime başvurmalısınız...! ";
    }

    //Yaşa göre uygun ideal kilolar
    if (0 <= userData.age && userData.age <= 17) {
      idealBmi = 20;
    } else if (18 <= userData.age && userData.age <= 24) {
      idealBmi = 21;
    } else if (25 <= userData.age && userData.age <= 34) {
      idealBmi = 22;
    } else if (35 <= userData.age && userData.age <= 44) {
      idealBmi = 23;
    } else if (45 <= userData.age && userData.age <= 54) {
      idealBmi = 24;
    } else if (55 <= userData.age && userData.age <= 64) {
      idealBmi = 25;
    } else if (65 <= userData.age) {
      idealBmi = 26;
    }

    let lastData = {
      weight: userData.weight,
      height: userData.height,
      age: userData.age,
      gender: userData.gender,
      bmi: newBmi,
      status: status,
      description: description,
      idealBmi: idealBmi,
    };

    // setLastUserData(lastData);

    if (userData === {}) {
    } else {
      if (lastData.bmi === "NaN") {
      } else {
        localStorage.setItem("data", JSON.stringify(lastData));
      }
    }

    let abc = JSON.parse(localStorage.getItem("data"));
    setLastUserData(abc);
  }, [userData]);

  const values = {
    userData,
    setUserData,
    lastUserData,
    setLastUserData,
    clickBtn,
    setClickBtn,
  };

  return (
    <CalculateContext.Provider value={values}>
      {children}
    </CalculateContext.Provider>
  );
};

const useCalculate = () => useContext(CalculateContext);
export { CalculateProvider, useCalculate };
