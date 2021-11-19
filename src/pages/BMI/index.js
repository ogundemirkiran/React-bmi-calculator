import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

function BMI() {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col className="descriptionBMI">
            <h2>Vücut Kitle İndeksi Nedir?</h2>
            <p>
              Vücut kitle indeksi, kişinin kilosunun ağırlığına oranla ölçülmesi
              olarak tanımlanabilir. Farklı bir deyişle kişinin kilogram
              cinsinden ağırlığının, metre cinsinden uzunluğunun karesine
              bölünmesiyle elde edilir. Çocuk, genç ve yetişkinlerde yağlanmaya
              bağlı olarak oluşan aşırı kilonun saptanması için yaygın olarak
              kullanılır. Vücut kitle indeksi çoğunlukla vücut yağ ölçümüyle
              paralellik gösterse de yağlılık oranı hakkında net bir sonuç
              vermez. Farklı bir deyişle vücut yağını direkt olarak ölçmez,
              bunun yerine tahmin oluşturmak için bir denklem kullanır. Kişinin
              vücudundaki ya ve kas miktarının ölçülüp değerlendirilmesi için
              ilave ölçümler yapılmalıdır. Dolayısıyla boy kilo indeksi, vücudun
              ne kadar yağlı olduğunun doğrudan bir ölçüsü olarak kabul edilmez.
              Vücut kitle indeksi, kişinin sağlıklı ya da sağlıksız bir kiloda
              olup olmadığını belirlemeye yardımcı bir araçtır. Yapılan
              hesaplama sonucunda kişinin vücut kitle indeksi yüksek çıkarsa bu,
              kişinin vücudunda çok fazla yağ olduğu anlamını taşıyabilir. Diğer
              bir ifadeyle yüksek BMI sonucu, kişide kalp hastalıkları, yüksek
              tansiyon ve diyabet gibi hastalıklara yakalanma riskinin de yüksek
              olduğunu ifade eder. Çok düşük BMI sonucu ise kişinin boyuna göre
              fazla zayıf olduğunu ifade eder. Bu aynı zamanda kişide kemik
              erimesi, bağışıklık sisteminin zayıf olması ve anemi gibi pek çok
              farklı hastalığın varlığının işareti olabilir. Bu yüzden ideal
              kilonun korunmasına yardımcı olmak için son derece kolay bir
              şekilde hesaplanabilen kilo boy indeksi, kişinin kilosunu kontrol
              etmesine ve daha önemlisi kilosuna bağlı olarak gelişebilecek
              sağlık risklerine karşı önlem almasına yardımcı olabilir.
            </p>
            <h2 className="mt-5">Vücut Kitle İndeksi Nasıl Hesaplanır?</h2>
            Vücut kitle indeksini hesaplamak, vücut yağı ve kas kütlesi hakkında
            net bir bilgi sunmasa da kişinin ideal kilosu hakkında kolayca bilgi
            verir. Kişinin sağlıklı kiloda olup olmadığını anlamasında etkili
            bir yöntem olan boy kilo indeksi hesaplama işleminde elde edilen
            değer ne kadar yüksekse, kişinin vücudundaki yağ oranının o kadar
            fazla olduğu anlaşılır. BMI değeri, kişinin kilosunun, kalp krizi,
            diyabet ve kanser gibi pek çok sağlık sorunu için risk teşkil edip
            etmediğini belirlemesi için de kullanılabilir. Vücut kitle indeksi,
            kişinin kilogram cinsinden ağırlığının metre cinsinden boyunun
            karesine bölünmesiyle hesaplanır. Elde edilen sonuç, kişinin hangi
            ağırlık kategorisinde olduğunu anlamasında kullanılır. Pek çok kişi
            için vücut yağı hakkında iyi bir tahmin sunan kilo boy indeksi,
            vücut geliştiriciler, düzenli spor yapanlar ve diğer kaslı kişiler
            için doğru bir anlam ifade etmeyebilir. Bu kişiler fazla kilolu
            olmasalar dahi aşırı kas kütleleri nedeniyle yüksek BMI değeri ile
            karşılaşabilirler. Ayrıca kas kütlesini fazlaca kaybeden yaşlı
            kişilerde de vücut yağının fazla olduğunu gösterme konusunda
            yetersiz olabilir. Boy kilo indeksi hesaplama işlemi yapılırken
            çocuklar ve gençler için de aynı formül kullanılsa da BMI cinsinden
            elde edilen sonuç farklı şekilde yorumlanır.
          </Col>
          <Col className="descriptionBMI">
            <h2>Vücut Kitle İndeksi Hesaplama </h2>
            <p>
              Tüm yaş gruplarında olduğu gibi öncelikle kişinin boyu ve kilosu
              doğru şekilde ölçülmelidir. Ardından boy kilo indeksini hesaplamak
              için vücut ağırlığı (kg) / boy uzunluğunun (m) karesi formülü
              kullanılır. Kişinin 1.74 m. uzunluğa ve 70 kg. ağırlığa sahip
              olduğu örnek bir durumda hesaplama şu şekilde yapılır:
            </p>
            <b>
              <p>1.74 x 1.74 = 3.02</p>
              <p>70 / 3.02 = 23.2</p>

              <p> Bu durumda kişinin vücut kitle indeksi 23.2 BMI'dır.</p>
            </b>
            <p>
              Bir diğer örnekte ise kişinin 1.55 m. boyunda ve 95 kg.
              ağırlığında olduğu varsayıldığında BMI değeri şu şekilde
              hesaplanır: 1.55 x 1.55 = 2.4025 90 / 2.4025 = 37.4 Bu durumda ise
              kişinin vücut kitle indeksi 37.4 BMI'dır. 2 ila 18 yaşındaki genç
              ve çocuk boy kilo indeksi hesaplama yöntemi aynı şekilde yapılsa
              da sonuçları farklı şekilde değerlendirilir. İki çocuğun birebir
              aynı BMI değerine sahip olması durumunda bile birinin obez,
              diğerinin ideal kiloda olduğu görülebilir. Farklı bir deyişle bu
              yaş grubunda boy kilo indeksi yaşa ve cinsiyete göre farklılık
              gösterdiğinden, ölçümün uzman diyetisyen ya da çocuk hekimi
              tarafından yapılması önerilir.
            </p>
            <h2 className="mt-5">
              Vücut Kitle İndeksi Değeri Ne Anlama Gelir?
            </h2>
            <p>
              <b>0 ila 18,4 BMI:</b> Zayıf. Kişinin boyuna oranla ağırlığının
              yetersiz olduğunu ifade eden bu değer ile karşılaşılması durumunda
              kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması
              önerilir.
            </p>
            <p>
              <b>18.5 ila 24.9 BMI:</b> Normal. Bu değer aralığı kişinin ideal
              kiloda olduğunu gösterir. Bu değere sahip olan kişilerin düzenli,
              dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.
            </p>
            <p>
              <b> 25 ila 29.9 BMI:</b> Fazla Kilolu. Kişinin boyuna oranla
              kilosunun fazla olduğunu gösteren bu değer aralığında kişinin
              uygun diyet ile fazla kilolarından kurtulması önerilir.
            </p>
            <p>
              <b>30 ila 34.9 BMI:</b> Şişman. Birinci derece obez kategorisinde
              değerlendiren değer aralığında, kişinin kilosunun sağlık açısından
              risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin
              diyetisyen yardımıyla kilo vermesi önerilir.
            </p>
            <p>
              <b>35 ila 44.9 BMI:</b> Şişman. İkinci derece obez olarak
              tanımlanan bu değerlere sahip olan kişilerde kalp ve damar
              hastalıkları bakımından risk artar. Kişinin kilo vermek için
              diyetisyene başvurması önerilir.
            </p>
            <p>
              <b>45+ BMI:</b> Aşırı Şişman. Üçüncü derece obez kategorisinde
              olan bu kişilerde hastalık gelişme riski çok yüksektir. Hekim ve
              diyetisyen eşliğinde kilo verilmesi önerilir.
            </p>
            <p>
              Yaş aralığına göre ise kişinin ideal vücut kitle indeksi şu
              şekildedir:
            </p>
            <p>
              <b>19-24 Yaş:</b> 19-24 BMI.
            </p>
            <p>
              <b>25-34 Yaş:</b> 20-25 BMI.
            </p>
            <p>
              <b>35-44 Yaş:</b> 21-26 BMI.
            </p>
            <p>
              <b>45-54 Yaş:</b> 22-27 BMI.
            </p>
            <p>
              <b>55-64 Yaş:</b> 23-28 BMI.
            </p>
            <p>
              <b>65 Yaş ve üzeri:</b> 24-29 BMI.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BMI;
