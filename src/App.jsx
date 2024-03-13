import TareasItem from './Tareas/TareasItem';
import ContadorTareas from './Contador/ContadorTareas.jsx';
import BuscadorTareas from './Buscador/BuscadorTareas.jsx';
import Tareaslista from './ListaTareas/Tareaslista.jsx';
import CreateTareaBoton from './Botontarea/CreateTareaBoton.jsx'
import useLocalStorage from './localStorage.jsx';
import TareasLoading from './TareasLoading/TareasLoading.jsx';
import TareasError from './TareasError/tareasError.jsx';
import Empty from './Empty /empty.jsx';
import React from 'react';
import Modal from './Modal/Modal.jsx';
import TareasForm from './TareasForm/TareasForm.jsx';
import style from './App.css';


function App() {
  const { item: tareas, saveItem: saveTareas, loading, error } = useLocalStorage("TAREAS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const addTarea = (text) => {
    const newTareas = [...tareas];
    newTareas.push({ text, completadas: false });
    saveTareas(newTareas);
  }
  const completadasTareas = tareas.filter(tareas => !!tareas.completadas).length

  const totalTareas = tareas.length

  const searchTareas = tareas.filter((tareas) => {
    return tareas.text.toLowerCase().includes(searchValue.toLowerCase())
  })


  const completarTareas = (text) => {
    const tareaIndex = tareas.findIndex((tareas) => tareas.text === text);
    const newItem = [...tareas];
    newItem[tareaIndex].completadas = !newItem[tareaIndex].completadas;
    saveTareas(newItem);
  };
  const deleteTareas = (text) => {
    const newItem = [...tareas]
    const tareaIndex = newItem.findIndex(
      (tarea) => tarea.text === text
    )
    newItem.splice(tareaIndex, 1)
    saveTareas(newItem);
  }


  return (
    <div className='column'>
      <div className='fixed'>
        <ContadorTareas completadas={completadasTareas} total={totalTareas} />
        <BuscadorTareas searchValue={searchValue} setSearchValue={setSearchValue} />
        <CreateTareaBoton setOpenModal={setOpenModal} />
        {openModal && (<Modal>
          <TareasForm setOpenModal={setOpenModal}
            addTarea={addTarea}
          />
        </Modal>)}

      </div>

      <Tareaslista>
        {loading && <TareasLoading />}
        {error && <TareasError />}
        {(!loading && searchTareas.length === 0) && <Empty />}

        {searchTareas.map(tarea => (
          <TareasItem
            key={tarea.text}
            text={tarea.text}
            completadas={tarea.completadas}
            onCompletadas={() => completarTareas(tarea.text)}
            onDelete={() => deleteTareas(tarea.text)}
          />
        ))}
      </Tareaslista>


    </div>
  );
}

export default App;
