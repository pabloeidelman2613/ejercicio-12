import React from "react";
import { Button, Form } from "react-bootstrap";

const InputForm = ({addImage,deleteImage}) => {

    return(
        <Form>
            <Button variant="warning" type="button" onClick={addImage}>Agregar Imagen</Button>
            <Button variant="danger" type="button" onClick={deleteImage}>Eliminar Imagen</Button>
        </Form>
    )
}





export default InputForm