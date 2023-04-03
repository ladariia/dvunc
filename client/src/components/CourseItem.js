import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { COURSE_ROUTE } from '../utils/consts';
import '../css/app.css';

const CourseItem = ({ course }) => {
    const navigate = useNavigate()
    return (
        <Col md={6} onClick={() => navigate(COURSE_ROUTE + '/' + course.course_id)}>
            <Card className="mt-4 p-4 d-flex flex-column justify-content-around card" style={{ width: '100%', height: 300, boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)', border: 'none' }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: '#FB652F' }}>{course.type.type_name}</div>
                <Row style={{ height: 120 }}>
                    <Col md={10}>
                        <div style={{ fontSize: 24, lineHeight: 1 }}>{course.course_name}</div>
                    </Col>
                    <Col md={2}>
                        <div class="arrow"></div>
                    </Col>
                </Row>
                {/* <div>close date</div> */}
                <div style={{ fontSize: 15, fontWeight: 500 }}>{course.course_duration} часов</div>
            </Card>
        </Col >
    );
};

export default CourseItem;