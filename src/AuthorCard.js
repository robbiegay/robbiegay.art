import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function AuthorCard(props) {
    return (
        <>
            <heading>
                <h1 className="pt-4 pb-3 text-center">{props.title}</h1>

                <Card style={{maxWidth: "300px"}}>
                    <Row className="no-gutters">
                        <Col xs={4}>
                            <Card.Img src={process.env.PUBLIC_URL + "/images/headshot-march-2020.jpg"} />
                        </Col>
                        <Col xs={8}>
                            <Card.Body>
                                <Card.Title>Robbie Gay</Card.Title>
                                <Card.Text>{props.date}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                <br />

            </heading>
        </>
    );
}

export default AuthorCard;