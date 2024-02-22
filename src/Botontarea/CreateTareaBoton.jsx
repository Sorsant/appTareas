import style from './Boton.module.css'

const CreateTareaBoton = () => {
    return (
        <><div className={style.addButtonConteiner}>
            <button className={style.add}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </div>
        </>
    )

}

export default CreateTareaBoton