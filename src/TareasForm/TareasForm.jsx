import React from 'react'
import style from './tareasForm.modulo.css'
const TareasForm = ({ setOpenModal, addTarea }) => {
    const [newTareaValue, setNewTareaValue] = React.useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        addTarea(newTareaValue)
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTareaValue(event.target.value);
    }
    return (
        <form onSubmit={onSubmit}>
            <label >Escribe una nueva Tarea</label>
            <textarea onChange={onChange} value={newTareaValue} className={style.Textarea} placeholder='Limpiar la pieza'></textarea>
            <div className="TareasForm_ButtonContainer">
                <button type='submit' className="TodoForm_Button TodoForm_Button_Add">Añadir</button>
                <button onClick={onCancel} type='button' className="TodoForm_Button TodoForm_Button_Cancelar">Cancelar</button>
            </div>
        </form>
    )
}

export default TareasForm
