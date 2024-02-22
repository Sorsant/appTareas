import TareasItem from './Tareas/TareasItem';
import ContadorTareas from './Contador/ContadorTareas.jsx';
import BuscadorTareas from './Buscador/BuscadorTareas.jsx';
import Tareaslista from './ListaTareas/Tareaslista.jsx';
import CreateTareaBoton from './Botontarea/CreateTareaBoton.jsx'
import './App.css';

const defaultTareas = [
  { text: 'Cortar cebolla', completadas: true },
  { text: 'Tomar el Curso de Intro a React.js', completadas: false },
  { text: 'Llorar con la Llorona', completadas: false },
  { text: 'jugar a la pelota', completadas: false },
];
function App() {
  return (
    <div>
      <ContadorTareas completadas={16} total={20} />
      <BuscadorTareas />
      <CreateTareaBoton />

      <Tareaslista>
        {defaultTareas.map(tarea => (
          <TareasItem
            key={tarea.text}
            text={tarea.text}
            completadas={tarea.completadas}
          />
        ))}
      </Tareaslista>

    </div>
  );
}

export default App;
