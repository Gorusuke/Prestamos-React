import React, {useState, Fragment} from 'react';
import {calcularTotal} from '../helpers'

const Formulario = (props) => {

  /*puedes poner props dentro de los parentesis del formulario
   y utilizar props. y la variable como en el ejemplo de abajo
   o poner {cantidad, guardarCantidad} y poner las varibles 
   normales (sin el props.cantidad). El resultado es lo mismo!
  */

  // Definir state
  const [error, guardarError] = useState(false)

  // caundo el usuario hace submit
  const calcularPrestamo = e => {
    e.preventDefault();
    // Validar que los campos no esten vacios
    if(props.cantidad === 0 || props.plazo === ''){
      guardarError(true);
      return;
    }

    // Eliminar el error previo
    guardarError(false);

    //Habilitar el spinner 
    props.guardarCargando(true);

    setTimeout(() => {
      // Realizar cotizacion
      const total = calcularTotal(props.cantidad, props.plazo);
      
      // Una vez calculado guardarTotal
      props.guardarTotal(total);

      // Desabilitar el Spinner
      props.guardarCargando(false);
    }, 2000);
    
  }

  return (
    <Fragment>
      <form onSubmit={calcularPrestamo}>
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input className="u-full-width" type="number" placeholder="Ejemplo: 3000" onChange={ e => props.guardarCantidad(Number(e.target.value))} />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select className="u-full-width" onChange={ e => props.guardarPlazo(Number(e.target.value))}>
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Calcular" className="button-primary u-full-width"/>
          </div>
        </div>
      </form>

      {(error) ? <p className="error">Todos los campos son Obligatorios</p> : ''}
    </Fragment>
  );
}
 
export default Formulario;