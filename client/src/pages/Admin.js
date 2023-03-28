import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDevice from '../components/modals/CreateCourse';

const Admin = () => {
    const [courseVisible, setCourseVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setCourseVisible(true)} variant={'outline-dark'} className="mt-2">Добавить курс</Button>
            <CreateDevice show={courseVisible} onHide={() => setCourseVisible(false)} />
        </Container>
    );
};

export default Admin;