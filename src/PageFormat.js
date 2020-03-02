import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PageFormat(props) {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <article className="text-justify">
                            {props.children}
                        </article>
                    </Col>
                    <Col xs={0} sm={1} md={2} lg={3}></Col>
                </Row>
            </Container>
        </>
    );
}

export default PageFormat;
