import React, { Fragment } from 'react';

/* function Header(props){

    console.info(props)

    return(
        <Fragment>
            <h1>{props.titulo}</h1>
            <h2>{props.descripcion}</h2>
        </Fragment>
    )
} */

/* Se pueden utilizar cualquiera de las 2 ↑↑↑↑↑↑↑↑↓↓↓↓↓↓↓↓↓↓ */ 

const Header = ({titulo}) => {
    return ( 
        <Fragment>
            <h1>{titulo}</h1>

        </Fragment> 
    );
}


export default Header;