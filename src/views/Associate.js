import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Table } from 'react-bootstrap';
import Aux from "../hoc/_Aux";
import { getAssociateList } from "../utilites/API/api";
function Associate() {
    const [associateList, setAssociateList] = useState([]);

    useEffect(() => {
        getAssociateList().then((response) => {
            setAssociateList(response.data.data)
            console.log(response.data.data);
        })

    }, [])

    return (
        <Aux>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Associate List Table</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Links</th>
                                        <th>Attachment</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {associateList.map((associate, i) => (
                                        <tr>
                                            <th scope="row">{associate.id}</th>
                                            <td>{associate.links}</td>
                                            <td>{associate.associate_attachment.path}</td>
                                            <td>{associate.created_at}</td>
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

export default Associate
