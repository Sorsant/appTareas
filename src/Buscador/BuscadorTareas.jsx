import React from 'react'
import style from './buscadorTareas.module.css'
import { useState } from 'react';

const BuscadorTareas = ({ searchValue, setSearchValue }) => {


    return (
        <input className={style.search} placeholder='Buscador' value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value)

            }} />
    )
}

export default BuscadorTareas

