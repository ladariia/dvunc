import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import CourseList from '../components/CourseList';
import TypeBar from '../components/TypeBar';
import { observer } from 'mobx-react-lite';
import { fetchTypes, fetchCourses } from '../http/courseAPI';

const Courses = observer(() => {
    const { course } = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchCourses(   ).then(data => course.setCourses(data))
    }, [])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={2}>
                    <TypeBar />
                </Col>
            </Row>
            <Row className="mt-2">
                <CourseList />
            </Row>
        </Container>
    );
});

export default Courses;