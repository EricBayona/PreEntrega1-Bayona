import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getProductos } from '../../asyncMock';
import { useState } from 'react';

function ItemListContainer({titulo}) {

  const [productos, setProductos] = useState([])

  useEffect(()=>{
    getProductos()
    .then((res)=>{
      // console.log(res);
      setProductos(res)
    })
    .catch((error)=>{
      console.log(error);
      
    })
  })
  return (
    <div >
      <h1 className="text-primary text-opacity-75">{titulo}</h1>
      {productos.map((producto)=>(
        <div key={producto.id}>
          <h2>{producto.nombre}</h2>
          <p>precio: ${producto.precio}</p>
          <p >{producto.categoria}</p>
        </div>
        
      ))}

    </div>
  );
}

ItemListContainer.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default ItemListContainer;