import Card from "react-bootstrap/Card";

function NewCard(props) {
  return (
    <Card className="" style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>المنتخب الأولمبي يودع منافسات بطولة غرب آسيا</Card.Text>
        <div className="d-flex justify-content-between">
          <Card.Text>بواسطة خبرني</Card.Text>
          <Card.Text>
            23 <i class="fa-regular fa-comment-dots"></i>{" "}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NewCard;
