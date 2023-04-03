import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from "../index"
import { Button } from 'react-bootstrap';

const TypeBar = observer(() => {
    const { course } = useContext(Context)
    return (
        <div className="d-flex">
            {course.types.map(type =>
                <Button
                    variant={'outline-dark'}
                    style={{ cursor: "pointer", borderRadius: 30, padding: 6, paddingRight: 12, paddingLeft: 12, marginRight: 8, fontSize: 15, fontWeight: 400, marginBottom: 15 }}
                    active={type.type_id === course.selectedType.type_id} //props active: если id типа эл-та итерации совпадает с типом кй мы сохранили в Store, тогда active
                    onClick={() => course.setSelectedType(type)}
                    key={type.type_id}>
                    {type.type_name}
                </Button>
            )}
        </div>
    );
});

export default TypeBar;