import style from './Contador.module.css'

const ContadorTareas = ({ total, completadas }) => {
    return (
        // total == completadas ?
        //     <h1 className={style.TodoCounter}>
        //         Felicidades Completaste Las Tareas
        //     </h1>
        //     :
        <h1 className={style.TodoCounter}>
            Completaste {completadas} de {total} Tareas
        </h1>
    )
}

export default ContadorTareas
