import Card from "react-bootstrap/Card";

function NewCard({ data }) {
  return (
    <Card className="" style={{ width: "18rem", border: "none" }}>
      <Card.Img
        style={{ height: "10rem", borderRadius: "0" }}
        variant="top"
        src={data.image}
      />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>المنتخب الأولمبي يودع منافسات بطولة غرب آسيا</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>بواسطة خبرني</Card.Text>
          <Card.Text>
            23 <i class="fa-regular sfa-comment-dots"></i>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewCard;
