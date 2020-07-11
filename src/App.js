import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CategoriaState from './context/categorias/categoriaState';
import HistoriaState from './context/historias/historiaState';
import Barra from './components/menu/Barra';
import ListadoCategorias from './components/categorias/ListadoCategorias';
import Inicio from './components/inicio/inicio';
//import Container from 'react-bootstrap/Container';
import Historia from './components/historias/Historia';
import ListadoHistorias from './components/historias/ListadoHistorias';
import Pagina404 from './components/errores/Pagina404';
//import Login from './components/auth/Login';



function App() {
  return (
    <CategoriaState>
      <HistoriaState>
        <Barra />
        <br />
        <div className="ContainerBody">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/ListadoHistorias" component={ListadoHistorias} />
              <Route exact path="/ListadoCategorias" component={ListadoCategorias} />
              <Route exact path="/Historia" component={Historia} />
              <Route component={Pagina404} />
            </Switch>
          </BrowserRouter>
        </div>
      </HistoriaState>
    </CategoriaState>
  );
}

export default App;
