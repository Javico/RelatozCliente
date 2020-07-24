import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CategoriaState from './context/categorias/categoriaState';
import HistoriaState from './context/historias/historiaState';
import Barra from './components/menu/Barra';
import ListadoCategorias from './components/categorias/ListadoCategorias';
import Inicio from './components/inicio/inicio';
//import Container from 'react-bootstrap/Container';
import Historia from './components/historias/Historia';
import ListadoHistorias from './components/historias/ListadoHistorias';
import NuevaCategoria from './components/categorias/NuevaCategoria';
import NuevaHistoria from './components/historias/NuevaHistoria';
import Pagina404 from './components/errores/Pagina404';
//import Login from './components/auth/Login';



function App() {
  return (
    <CategoriaState>
      <HistoriaState>
        <Barra />
        <br />
        <div className="ContainerBody">
          <Router>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/ListadoHistorias/:id" component={ListadoHistorias} />
              <Route exact path="/ListadoCategorias" component={ListadoCategorias} />
              <Route exact path="/Historia" component={Historia} />
              <Route exact path="/NuevaCategoria" component={NuevaCategoria} />
              <Route exact path="/NuevaHistoria" component={NuevaHistoria} />
              <Route component={Pagina404} />
            </Switch>
          </Router>
        </div>
      </HistoriaState>
    </CategoriaState>
  );
}

export default App;
