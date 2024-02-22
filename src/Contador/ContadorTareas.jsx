import style from './Contador.module.css'

const ContadorTareas = ({ total, completadas }) => {
    return (
        <h1 className={style.TodoCounter}>
            Completaste {completadas} de {total} Tareas
        </h1>
    )
}

export default ContadorTareas
