import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CategoriaState from './context/categorias/categoriaState';
import HistoriaState from './context/historias/historiaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/auth/authState';
import Barra from './components/menu/Barra';
import ListadoCategorias from './components/categorias/ListadoCategorias';
import Inicio from './components/inicio/inicio';
//import Container from 'react-bootstrap/Container';
import Historia from './components/historias/Historia';
import ListadoHistorias from './components/historias/ListadoHistorias';
//import NuevaCategoria from './components/categorias/NuevaCategoria';
import NuevaHistoria from './components/historias/NuevaHistoria';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Pagina404 from './components/errores/Pagina404';
import GridCategorias from './components/categorias/GridCategorias';
import GridHistorias from './components/historias/GridHistorias';
import GridUsuarios from './components/auth/GridUsuarios';
import Login from './components/auth/Login';
import RutaPrivada from './components/rutas/rutaPrivada';



function App() {
  return (
    <AlertaState>
      <AuthState>
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
                  {/* <Route exact path="/NuevaCategoria" component={NuevaCategoria} /> */}
                  <Route exact path="/NuevaHistoria" component={NuevaHistoria} />
                  {/* <Route exact path="/GridCategorias" component={GridCategorias} />
                  <Route exact path="/GridHistorias" component={GridHistorias} /> */}
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/NuevaCuenta" component={NuevaCuenta} />
                  {/* <RutaPrivada exact path="/NuevaCuenta" component={NuevaCuenta} /> */}
                  <RutaPrivada exact path="/GridCategorias" component={GridCategorias} />
                  <RutaPrivada exact path="/GridHistorias" component={GridHistorias} />
                  <RutaPrivada exact path="/GridUsuarios" component={GridUsuarios} />
                  <Route component={Pagina404} />
                </Switch>
              </Router>
            </div>
          </HistoriaState>
        </CategoriaState>
      </AuthState>
    </AlertaState>
  );
}

export default App;
