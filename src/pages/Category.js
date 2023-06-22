import React from "react";
import "../assets/Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewCard from "../component/NewCard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AllNews } from "../newsData";

let news = [
  {
    id: 1,
    title: "ماذا يحدث لجسمك عند تناول منقوع التين على الريق؟",
    description: "هذا وصف قصير",
    longDescription: `
    خبرني - يوضح الدكتور سوسن غزال ، خبير التغذية العلاجية ، فوائد نقع التين المجفف على معدة فارغة على صفحته الرسمية على Facebook:

    تجنب جميع أنواع السرطان وخاصة سرطان القولون حيث أنه من أقوى مضادات الأكسدة الطبيعية حيث أنه يحارب الجذور الحرة المسببة لهذا المرض وغيره من الأمراض الخطيرة.
    
    مفيد جدا لصحة الجهاز التنفسي حيث يعالج الأعراض المصاحبة لنزلات البرد والرشح والسعال والإنفلونزا كما يساعد في القضاء على أمراض الصدر وخاصة الربو.
    
    يحتوي على نسبة عالية من البوتاسيوم وبالتالي يساعد على ضبط وتنظيم مستوى السكر في الدم وإزالة السموم المتراكمة من الجسم.
    
    يحتوي على نسبة عالية من الألياف الغذائية ، وهو فعال في علاج مشاكل الجهاز الهضمي المختلفة ، بما في ذلك مشاكل مثل الإمساك والغازات والانتفاخ وعسر الهضم ، حيث يحتوي على نسبة عالية من الجلوكوز الذي يعمل كملين طبيعي للأمعاء.
    
    يحتوي على نسبة عالية من البوليفينول وأحماض أوميغا 3 التي تساعد على التحكم في ضغط الدم والوقاية من ارتفاع ضغط الدم.
    
    يعوض نقص الجسم بفيتامين د، كما يساعد على خفض معدل الكولسترول الضارّ، مما يقي من أمراض القلب والشرايين والأوعية الدموية، كما يحتوي على نسبة عالية من حمض الفوليك الهام جداً لصحة النساء الحوامل.`,
    image:
      "https://www.khaberni.com/uploads/news_model/2023/06/main_image6491541c07966.jpg",
    sourceName: "خبرني",
    sourceNameImg:
      "https://pbs.twimg.com/profile_images/834719114300112896/67kxHbpf_400x400.jpg",
    sourceUrl:
      "https://www.khaberni.com/news/596307?utm_campaign=nabdapp.com&utm_medium=referral&utm_source=nabdapp.com&ocid=Nabd_App",
    publichedDatetime: "2023-06-20 ",
    type: "صحة",
  },
  {
    id: 2,
    title: "ماذا يحدث لجسمك عند تناول منقوع التين على الريق؟",
    description: "هذا وصف قصير",
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
  {
    id: 3,
    title: "عنوان ثالث",
    description: "هذا وصف قصير",
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
  {
    id: 4,
    title: "عنوان ثالث",
    description: "هذا وصف قصير",
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
  {
    id: 5,
    title: "عنوان ثالث",
    description: "هذا وصف قصير",
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
  {
    id: 6,
    title: "عنوان ثالث",
    description: "هذا وصف قصير",
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

const Category = () => {
  const params = useParams();
  const props = params.type;
  const filteredObjectsSport = AllNews.filter((obj) => obj.type === "sport");
  const filteredObjectsEconomy = AllNews.filter(
    (obj) => obj.type === "economy"
  );
  const filteredObjectsBreaking = AllNews.filter(
    (obj) => obj.type === "breaking"
  );
  const filteredObjectsWorld = AllNews.filter((obj) => obj.type === "world");
  const filteredObjectsHealth = AllNews.filter((obj) => obj.type === "health");

  return (
    <Container>
      <Row>
        {props === "sport" && (
          <>
            <p
              className="category-title mx-auto mt-5 py-1 px-2 text-white"
              style={{ backgroundColor: "#ff8d00" }}
            >
              أخبار الرياضة
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsSport.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "economy" && (
          <>
            <p
              className="category-title mx-auto mt-5 py-1 px-2 text-white"
              style={{ backgroundColor: "#17c8bd" }}
            >
              أخبار الاقتصاد
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsEconomy.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
        {props === "breaking" && (
          <>
            <p
              className="category-title mx-auto mt-5 py-1 px-2 text-white"
              style={{ backgroundColor: "#FF0000" }}
            >
              عاجل
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsBreaking.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "world" && (
          <>
            <p
              className="category-title mx-auto mt-5 py-1 px-2 text-white"
              style={{ backgroundColor: "#9933CC" }}
            >
              العالم
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsWorld.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "health" && (
          <>
            <p
              className="category-title mx-auto mt-5 py-1 px-2 text-white"
              style={{ backgroundColor: "#3366CC" }}
            >
              العالم
            </p>
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsHealth.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
      </Row>

      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <p className="category-more my-5 ">
            <span>المزيد</span>
          </p>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center gap-4 my-5">
        {AllNews.map((newsItem) => {
          return <NewCard data={newsItem} />;
        })}
      </Row>
    </Container>
  );
};

export default Category;
