import React, { useState, useEffect } from 'react'
import {Row, Col, Card, Table} from 'react-bootstrap';
import { getCommitteeList } from "../utilites/API/api";

function Committee() {
    const [committeeList, setCommitteeList] = useState([]);

    useEffect(() => {
        getCommitteeList().then((response) => {
            setCommitteeList(response.data.data)
        })

    }, [])

    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Committee List Table</Card.Title>
                </Card.Header>
                <Card.Body>
                <Table striped responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Full Name</th>
                                        <th>TM Number</th>
                                        <th>Position</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {committeeList.map((committee, i) => (
                                        <tr>
                                            <th scope="row">{i+1}</th>
                                            <td>{committee.tour_guide.full_name}</td>
                                            <td>{committee.tour_guide.tm_number}</td>
                                            <td>{committee.position}</td>
                                            <td>{committee.status_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Committee
