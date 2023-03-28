import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from "../index"
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { course } = useContext(Context)
    return (
        <ListGroup>
            {course.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: "pointer" }}
                    active={type.type_id === course.selectedType.type_id} //props active: если id типа эл-та итерации совпадает с типом кй мы сохранили в Store, тогда active
                    onClick={() => course.setSelectedType(type)}
                    key={type.type_id}>
                    {type.type_name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;