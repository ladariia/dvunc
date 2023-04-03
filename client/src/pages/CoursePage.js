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
            <Row style={{ marginTop: 200, marginBottom: 30, fontSize: 15, fontWeight: 500 }}>
                <Col md={4}>{course.type.type_name}</Col>
            </Row>
            <Row>
                <Col md={12}>
                    <h1 style={{ fontSize: 48 }}>{course.course_name}</h1>
                </Col>
            </Row>
            <Row>
                {/* <Col md={2}>
                    <Button variant="dark">Подать заявку</Button>
                </Col> */}
                {/* <Col md={2}>close date</Col> */}
            </Row>
            <Row style={{ marginTop: 120 }}>
                <Col md={3}>
                    <p style={{ fontSize: 15, fontWeight: 400, color: '#AAA' }}>Формат</p>
                    <p style={{ fontSize: 16, fontWeight: 500 }}>{course.format.format_name}</p>
                </Col>
                <Col md={3}>
                    <p style={{ fontSize: 15, fontWeight: 400, color: '#AAA' }}>Стоимость</p>
                    <p style={{ fontSize: 16, fontWeight: 500 }}>{course.course_price} рублей</p>
                </Col>
                <Col md={3}>
                    <p style={{ fontSize: 15, fontWeight: 400, color: '#AAA' }}>Длительность</p>
                    <p style={{ fontSize: 16, fontWeight: 500 }}>{course.course_duration} часов</p>
                </Col>
                <Col md={3}>
                    <p style={{ fontSize: 15, fontWeight: 400, color: '#AAA' }}>Расписание</p>
                    <p style={{ fontSize: 16, fontWeight: 500 }}>
                        {course.course_shedule.map(shedule =>
                            <Row key={shedule.shedule_id} >
                                <div>{shedule.shedule_dateofstart} - {shedule.shedule_dateoffinish}</div>
                            </Row>
                        )}
                    </p>
                </Col>
            </Row>
            <Row style={{ marginTop: 200, marginBottom: 100 }}>
                <Card className="p-4" style={{ border: 'none', borderRadius: 16, background: '#E1DFEF' }}>
                    <Row>
                        <Col md={4}>
                            <h2 style={{ fontSize: 32 }}>Программа обучения</h2>
                        </Col>
                        <Col md={8}>
                            {course.course_module.map(module =>
                                <div key={module.module_id} >
                                    <h3 className="mt-4 mb-4" style={{ fontSize: 24 }}> {module.module_name}</h3>
                                    <hr style={{ color: '#fff' }} />
                                    {/* <Col md={6}>
                                    <ul>
                                        {module.subjects.map(subject =>
                                            <li key={subject.subject_id}>
                                                <p>{subject.subject_name}</p>
                                            </li>
                                        )}
                                    </ul>
                                </Col> */}
                                </div>
                            )}
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Container>
    );
};

export default CoursePage;