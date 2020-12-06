import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import { getTourGuideList } from "../utilites/API/api";

function TourGuide() {
    const [tourGuideList, setTourGuideList] = useState([]);

    useEffect(() => {
        getTourGuideList().then((response) => {
            setTourGuideList(response.data.data)
            console.log(response.data.data);
        })
    }, [])

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Tour Guide List Table</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>TM Number</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tourGuideList.map((tourGuide, i) => (
                                        <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{tourGuide.full_name}</td>
                                            <td>{tourGuide.email}</td>
                                            <td>{tourGuide.tm_number}</td>
                                            <td>{tourGuide.status_name}</td>
                                            <td>{tourGuide.created_at}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    )
}

export default TourGuide
