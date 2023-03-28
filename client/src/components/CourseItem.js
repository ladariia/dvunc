import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { COURSE_ROUTE } from '../utils/consts';

const CourseItem = ({ course }) => {
    const navigate = useNavigate()
    return (
        <Col md={6} onClick={() => navigate(COURSE_ROUTE + '/' + course.course_id)}>
            <Card className="mt-2 p-4" style={{ width: 600, boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)', border: 'none' }}>
                <div>type</div>
                <div style={{ fontSize: 28 }}>{course.course_name}</div>
                <div>close date</div>
                <div>{course.course_duration} часов</div>
            </Card>
        </Col >
    );
};

export default CourseItem;