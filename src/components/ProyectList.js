import ProyectListItem from "./ProyectListItem";
import Paginator from "./Paginator";

function ProyectList(props){

  const vProyectos = props.proyectos;
  const listaProyectos = vProyectos.map( p =>
    <ProyectListItem 
        id = {p.id}
        nombre = {p.nombre}
        descripcion = {p.descripcion}
        fecha = {p.fecha}
        director = {p.director} 
    />
  );

return(
    <div className="container">
        <div className="card mt-lg-5">
          <div className="card-body">
            <button className="btn btn-success float-sm-end">Registrar Novedad</button>
            <h3>Dashboard</h3>
            <h5 className="text-muted">Bienvenido al sistema</h5>
          </div>
        </div>
        <div className="list-group mt-lg-5">
          {listaProyectos}
        </div>
        <Paginator />
      </div>
);

}

export default ProyectList;