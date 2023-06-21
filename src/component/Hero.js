import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";
import "../assets/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Hero() {
  return (
    <div className="hero-container d-flex justify-content-center my-4">
      <Card
        className="hero-card-one"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <span
          className="px-3 py-1 mb-2 hero-headings-news-span "
          style={{ backgroundColor: "#EF4747" }}
        >
          الأخبار المثبتة
        </span>
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#FF8D00" }}
          >
            رياضة
          </span>

          <Card.Text>
            كوكا: لم أحصل على فرصتي كاملة مع المنتخب.. ورفضت عروضا من مصر
            والسعودية{" "}
          </Card.Text>
          <div className="hero-card-tail">
            <div>بواسطة: صحيفة الرأي الأردنية</div>
            <div>
              23 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card
        className="hero-card-two"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#17C8BD" }}
          >
            إقتصاد
          </span>
          <Card.Text>
            البنك الدولي يوافق على تمويل بقيمة 250 مليون دولار لتحسن الخدمات
            المائية بالمملكة
          </Card.Text>
          <div className="hero-card-tail">
            <div>بواسطة: خبرني</div>
            <div>
              23 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>
      <Card
        className="hero-card-three"
        style={{
          borderRadius: "0",
          border: "none",
          color: "#fff",
        }}
      >
        <Card.Body className="hero-card-body">
          <span
            className="px-3 py-1 mb-2 "
            style={{ backgroundColor: "#478AEF" }}
          >
            منوعات
          </span>
          <Card.Text className="">
            خبراء: معدل السير يحد من الحوادث المرورية ويُعالج أنماط جديدة من
            النقل.. إضافة أولى وأخيرة
          </Card.Text>
          <div className="hero-card-tail">
            <div>بواسطة: صحيفة الرأي الأردنية</div>
            <div>
              23 <FontAwesomeIcon icon={faComment} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
