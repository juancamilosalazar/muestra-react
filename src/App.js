import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import AgregarProducto from './components/AgregarProducto';
import Producto from './components/producto'
import Header from './components/Header'

import store from './store'
import {Provider} from 'react-redux'


function App() {

  return (
    
    <Router>
      <Provider store={store}>
      <Header/>
        <main className="container mt-5">
          <Switch>
            <Route exact path="/nuevo-producto" component={AgregarProducto}/>
            <Route exact path="/productos" component={Productos}/>
            <Route exact path="/producto/:id" component={Producto}/>
            <Route exact path="/productos/editar/:id" component={EditarProducto}/>
          </Switch>
        </main>
      </Provider>
    </Router>
  );
}

export default App;
