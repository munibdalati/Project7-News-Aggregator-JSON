import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/index.css";
let News = [
  {
    id: 1,
    title: "ماذا يحدث لجسمك عند تناول منقوع التين على الريق؟",
    description: "",
    longDescription: `
    خبرني - يوضح الدكتور سوسن غزال ، خبير التغذية العلاجية ، فوائد نقع التين المجفف على معدة فارغة على صفحته الرسمية على Facebook:

    تجنب جميع أنواع السرطان وخاصة سرطان القولون حيث أنه من أقوى مضادات الأكسدة الطبيعية حيث أنه يحارب الجذور الحرة المسببة لهذا المرض وغيره من الأمراض الخطيرة.
    
    مفيد جدا لصحة الجهاز التنفسي حيث يعالج الأعراض المصاحبة لنزلات البرد والرشح والسعال والإنفلونزا كما يساعد في القضاء على أمراض الصدر وخاصة الربو.
    
    يحتوي على نسبة عالية من البوتاسيوم وبالتالي يساعد على ضبط وتنظيم مستوى السكر في الدم وإزالة السموم المتراكمة من الجسم.
    
    يحتوي على نسبة عالية من الألياف الغذائية ، وهو فعال في علاج مشاكل الجهاز الهضمي المختلفة ، بما في ذلك مشاكل مثل الإمساك والغازات والانتفاخ وعسر الهضم ، حيث يحتوي على نسبة عالية من الجلوكوز الذي يعمل كملين طبيعي للأمعاء.
    
    يحتوي على نسبة عالية من البوليفينول وأحماض أوميغا 3 التي تساعد على التحكم في ضغط الدم والوقاية من ارتفاع ضغط الدم.
    
    يعوض نقص الجسم بفيتامين د، كما يساعد على خفض معدل الكولسترول الضارّ، مما يقي من أمراض القلب والشرايين والأوعية الدموية، كما يحتوي على نسبة عالية من حمض الفوليك الهام جداً لصحة النساء الحوامل.`,
    img: "https://www.khaberni.com/uploads/news_model/2023/06/main_image6491541c07966.jpg",
    sourceName: "خبرني",
    sourceNameImg:
      "https://pbs.twimg.com/profile_images/834719114300112896/67kxHbpf_400x400.jpg",
    sourceUrl:
      "https://www.khaberni.com/news/596307?utm_campaign=nabdapp.com&utm_medium=referral&utm_source=nabdapp.com&ocid=Nabd_App",
    publichedDatetime: "2023-06-20 ",
    type: "صحة",
  },
];

const Details = () => {
  return (
    <div className="details-container container d-flex align-items-center justify-content-center flex-column">
      <Card className=" details.card mb-5 my-4 w-75 border-0">
        <div className="mx-5">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <img
                className="details-source-name-img"
                src={News[0]["sourceNameImg"]}
                alt=""
              ></img>
              <p className="mb-0 mx-2 display-7">{News[0]["sourceName"]}</p>
            </div>

            <p className="display-7">{News[0]["type"]}</p>
          </div>

          <h2>{News[0]["title"]}</h2>
          <p className="display-7">{News[0]["publichedDatetime"]}</p>
        </div>

        <Card.Img
          className="details-img-center"
          variant="top"
          src={News[0]["img"]}
        />
        <Card.Body>
          <Card.Text className="details-text"></Card.Text>
          {News[0]["longDescription"]}
        </Card.Body>
      </Card>
      <p>المزيد</p>
    </div>
  );
};

export default Details;
