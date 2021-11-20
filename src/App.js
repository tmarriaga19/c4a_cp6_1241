//import logo from './logo.svg';
import NavBar from './components/NavBar';
import ProyectList from './components/ProyectList';
import Footer from './components/Footer';
import './App.css';

function App() {

  const lista_datos = [
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022" },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022" },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022" },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022" },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022" }
  ];

  return (
    <div>
      <NavBar />
      <ProyectList proyectos={lista_datos} />
      <Footer />
    </div>

  );
}

export default App;
