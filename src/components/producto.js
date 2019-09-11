import React from 'react';
import {Link} from 'react-router-dom';
import {borrarProductoAction} from '../actions/productosActions'
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'

const  Producto=({producto})=>{

const dispatch = useDispatch();
const confirmarEliminarProducto = id =>{
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿deseas eliminar este producto?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:"Cancelar",
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'El producto se elimino correctamente.',
            'success'
          )
          dispatch(borrarProductoAction(id))
        }
      })



    console.log(id)
    
}

    return (
        <tr>
            <td>{producto.nombre}</td>
            <td> <span className="font-weight-bold">${producto.precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${producto.id}`}
                className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button className="btn btn-danger"
                onClick={()=>confirmarEliminarProducto(producto.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
export default Producto;