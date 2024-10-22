import React from 'react';
import { useRouter } from 'next/router';
import listaDeProductos from '@/components/lista/listaDeProductos';


const Cultura = () => {
  const router = useRouter();
  const { culture } = router.query;

  const culturaClickeada = listaDeProductos.find((producto) => producto.categoria === culture);

  if (!culturaClickeada) {
    return <p>No se encontró ningún producto en esta categoría.</p>;
  }

  return (
    <div>
      <h2>Productos de la categoría: {culture}</h2>
      <div>
        <p>{culturaClickeada.descripcionCultura}</p>
        <img src={culturaClickeada.imagenCultura} />
      </div>
    </div>
  ); 
};

export default Cultura;