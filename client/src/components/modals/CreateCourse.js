import React, { useContext, useState, useEffect } from 'react';
import { Modal, Button, Dropdown, Form, Row, Col } from 'react-bootstrap';
import { Context } from "../../index";
import { fetchTypes, fetchFormats, createCourse } from '../../http/courseAPI';
import { observer } from 'mobx-react-lite';

const CreateCourse = observer(({ show, onHide }) => {
    const { course } = useContext(Context)
    const [module, setModule] = useState([])
    const [name, setName] = useState('')
    const [duration, setDuration] = useState()
    const [price, setPrice] = useState()

    const changeModule = (key, value, module_id) => {
        setModule(module.map(i => i.module_id === module_id ? { ...i, [key]: value } : i))
    }

    const addCourse = () => {
        const formData = new FormData()
        formData.append('course_name', name)
        formData.append('course_price', `${price}`)
        formData.append('course_duration', `${duration}`)
        formData.append('typeTypeId', course.selectedType.type_id)
        formData.append('formatFormatId', course.selectedFormat.format_id)
        formData.append('course_module', JSON.stringify(module))
        createCourse(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => course.setTypes(data))
        fetchFormats().then(data => course.setFormats(data))
    }, [])

    const addModule = () => {
        setModule([...module, { module_id: Date.now(), module_name: '' }])
    }

    const removeModule = (module_id) => {
        setModule(module.filter(i => i.module_id !== module_id))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить курс
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown>
                    <Dropdown.Toggle>
                        {course.selectedType.type_name || "Выберите тип"}
                        <Dropdown.Menu>
                            {course.types.map(type =>
                                <Dropdown.Item onClick={() => course.setSelectedType(type)} key={type.type_id}>{type.type_name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown.Toggle>
                </Dropdown>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>
                        {course.selectedFormat.format_name || "Выберите тип"}
                        <Dropdown.Menu>
                            {course.formats.map(format =>
                                <Dropdown.Item onClick={() => course.setSelectedFormat(format)} key={format.format_id}>{format.format_name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown.Toggle>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-2"
                    placeholder="Введите название "
                />
                <Form.Control
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="mt-2"
                    placeholder="Введите длительность"
                    type="number"
                />
                <Form.Control
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    className="mt-2"
                    placeholder="Введите стоимость"
                    type="number"
                />
                <hr />
                <Button onClick={addModule} variant="outline-dark">Добавить новый модуль</Button>
                {
                    module.map(i =>
                        <Row className="mt-2" key={i.module_id}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.module_name}
                                    onChange={(e) => changeModule('module_name', e.target.value, i.module_id)}
                                    placeholder="Введите название"
                                />
                            </Col>
                            <Col>
                                <Button onClick={() => removeModule(i.module_id)} variant={'outline-danger'}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )
                }
                <hr />
                <Button variant="outline-dark">Добавить расписание</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addCourse}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCourse;