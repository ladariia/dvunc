import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchCourse } from '../http/courseAPI';

const CoursePage = () => {
    const [course, setCourse] = useState({ course_module: [], course_shedule: [], format: [], type: [], subjects: [] })
    const { course_id } = useParams()
    useEffect(() => {
        fetchCourse(course_id).then(data => setCourse(data))
    }, [])
    return (
        <Container>
            <Row style={{ marginTop: 200 }}>
                <Col md={2}>{course.type.type_name}</Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h1>{course.course_name}</h1>
                </Col>
            </Row>
            <Row>
                {/* <Col md={2}>
                    <Button variant="dark">Подать заявку</Button>
                </Col> */}
                {/* <Col md={2}>close date</Col> */}
            </Row>
            <Row style={{ marginTop: 50 }}>
                <Col md={3}>{course.format.format_name}</Col>
                <Col md={3}>{course.course_price} рублей</Col>
                <Col md={3}>{course.course_duration} часов</Col>
                <Col md={3}>
                    {course.course_shedule.map(shedule =>
                        <Row key={shedule.shedule_id} >
                            <div>{shedule.shedule_dateofstart} - {shedule.shedule_dateoffinish}</div>
                        </Row>
                    )}
                </Col>
            </Row>
            <Row style={{ marginTop: 200, marginBottom: 100 }}>
                <Card className="p-4" style={{ boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)', border: 'none' }}>
                    <h2 style={{ marginBottom: 50 }}>План программы</h2>
                    {course.course_module.map(module =>
                        <Row key={module.module_id} >
                            <Col md={6}>
                                <h3 style={{ paddingLeft: 200 }}>{module.module_name}</h3>
                            </Col>
                            <Col md={6}>
                                <ul>
                                    {module.subjects.map(subject =>
                                        <li key={subject.subject_id}>
                                            <p>{subject.subject_name}</p>
                                        </li>
                                    )}
                                </ul>
                            </Col>
                        </Row>
                    )}
                </Card>
            </Row>
        </Container>
    );
};

export default CoursePage;