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
        fetchCourses(null).then(data => { course.setCourses(data) })
    }, [])

    useEffect(() => {
        fetchCourses(course.selectedType.type_id).then(data => {
            course.setCourses(data)
        })
    }, [course.selectedType])

    return (
        <Container>
            <Row style={{ marginTop: 120 }}>
                <TypeBar />
                <CourseList />
            </Row>
        </Container>
    );
});

export default Courses;