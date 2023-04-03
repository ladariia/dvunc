import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDevice from '../components/modals/CreateCourse';

const Admin = () => {
    const [courseVisible, setCourseVisible] = useState(false)
    return (
        <Container className="d-flex flex-column" style={{ marginTop: 120 }}>
            <h1 style={{ fontSize: 26 }}>Курсы</h1>
            <Button onClick={() => setCourseVisible(true)} variant={'outline-dark'} className="mt-2" style={{ borderRadius: 30, width: 100 }}>Добавить</Button>
            <CreateDevice show={courseVisible} onHide={() => setCourseVisible(false)} />
        </Container>
    );
};

export default Admin;