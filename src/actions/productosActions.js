import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_EDITAR_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITADO_ERROR,
    PRODUCTO_EDITADO_EXITO

} from '../types';

import clienteAxios from '../config/axios';

export function crearNuevoProductoAction(producto){
    return (dispatch) =>{
        dispatch(nuevoProducto())
        clienteAxios.post('https://my-json-server.typicode.com/juancamilosalazar/pilae-react/restaurant',producto)
        .then(respuesta=>{
           
            dispatch(agregarProductoExito(producto))
        })
        .catch(error=>{
            console.log(error)
            dispatch(agregarProductoError(error));
        })

        
    }
}

export const nuevoProducto=()=>({

    type:AGREGAR_PRODUCTO
});

export const agregarProductoExito = producto =>({
    type:AGREGAR_PRODUCTO_EXITO,
    payload:producto
});

export const agregarProductoError=error=>({
    type: AGREGAR_PRODUCTO_ERROR
})


export function obtenerProductosAction(){
    return (dispatch) =>{
        dispatch(obtenerProductosComienzo());
        clienteAxios.get('https://my-json-server.typicode.com/juancamilosalazar/pilae-react/restaurant')
        .then(respuesta=>{
            console.log(respuesta)
            dispatch(descargaExitosa(respuesta.data))

        })
        .catch(error=>{
            dispatch(descargaError())

        })
    }
}

export const obtenerProductosComienzo =()=>({
    type:COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaExitosa= productos =>({
    type:DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})
export const descargaError =()=>({
    type:DESCARGA_PRODUCTOS_ERROR
})

export function borrarProductoAction(id) {
    return(dispatch)=>{
        dispatch(obtenerProductoEliminar())
        clienteAxios.delete(`https://my-json-server.typicode.com/juancamilosalazar/pilae-react/restaurant/${id}`)
        .then(respuesta=> {
            dispatch(eliminarProductoExito(id))
        })
        .catch(error=>{
            dispatch(eliminarProductoError())
        })
    }
}  

export const obtenerProductoEliminar=()=>({
    type: OBTENER_PRODUCTO_ELIMINAR
})

export const eliminarProductoExito= id =>({
    type:PRODUCTO_ELIMINADO_EXITO,
    payload: id
})


export const eliminarProductoError= () =>({
    type:PRODUCTO_ELIMINADO_ERROR
})

export function obtenerProductoEditarAction(id){
    return(dispatch)=>{
        dispatch(obtenerProductoAction());

        clienteAxios.get(`https://my-json-server.typicode.com/juancamilosalazar/pilae-react/restaurant/${id}`)
        .then(respuesta=>{
    
            dispatch(obtenerProductoEditarExito(respuesta.data))

        })
        .catch(error => {
            dispatch(obtenerProductoEditarExito())
        })
    }
}

export const obtenerProductoAction=()=>({
    type:OBTENER_PRODUCTO_EDITAR
})

export const obtenerProductoEditarExito = producto =>({
    type:PRODUCTO_EDITAR_EXITO,
    payload:producto
})
export const obtenerProductoEditarError = () =>({
    type:PRODUCTO_EDITAR_ERROR
})

export function editarProductoAction(producto){
    return (dispatch) => {
        dispatch(comenzarEdicionProducto())

        clienteAxios.put(`https://my-json-server.typicode.com/juancamilosalazar/pilae-react/restaurant/${producto.id}`,producto)
        .then(respuesta=>{
            console.log(respuesta)
            dispatch(editarProductoExito(respuesta.data))
        })
        .catch(error =>{
            dispatch(editarProducoError())
        })
    }
}

export const comenzarEdicionProducto=()=>({
    type: COMENZAR_EDICION_PRODUCTO

})
export const editarProductoExito=producto=>({
    type: PRODUCTO_EDITADO_EXITO,
    payload: producto
})

export const editarProducoError = () =>({
    type:PRODUCTO_EDITADO_ERROR
})






