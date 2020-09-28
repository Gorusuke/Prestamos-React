import React from 'react';

const Resultado = (props) => (
    <div className="u-full-width resultado">
        <h2>Resumen</h2>
        <p>La cantidad solicitada es <b>${props.cantidad}</b></p>
        <p>A pagar en: <b>{props.plazo} Meses</b></p>
        <p>Su pago mensual es de: <b>${ (props.total / props.plazo).toFixed(1)}</b></p>
        <p>Total a pagar: <b>${props.total}</b></p>
    </div>

);

 
export default Resultado;