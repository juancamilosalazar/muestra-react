import React,{useState} from 'react';
import {crearNuevoProductoAction} from '../actions/productosActions'
import {useDispatch,useSelector} from 'react-redux'
import {validarFormularioAction, validacionExito,validacionError} from '../actions/validacionActions'


function AgregarProducto({history}){

    const [nombre,guardarNombre]=useState('');
    const [precio,guardarPrecio]=useState('');
    
    const dispatch =useDispatch();
    const agregarProducto = (Producto) =>dispatch(crearNuevoProductoAction(Producto));
    const validarFormulario=()=> dispatch(validarFormularioAction());
    const exitoValidacion=()=>dispatch(validacionExito());
    const errorValidacion=()=>dispatch(validacionError());
    
    const error = useSelector((state)=> state.error.error)

    const submitNuevoProducto= e =>{
        e.preventDefault();

        validarFormulario()

        
        
        if(nombre.trim()===''|| precio.trim ===''){
            errorValidacion()
            return;
        }
        exitoValidacion();
        agregarProducto({
            nombre,precio
        });

        history.push('/productos');
        
    }
    
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={submitNuevoProducto}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro" 
                                    value={nombre}
                                    onChange={e=> guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Precio Libro"
                                    value={precio} 
                                    onChange={e=> guardarPrecio(e.target.value)}

                               />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
                        {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Todos los campos son obligatorios</div>:null}
        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AgregarProducto;