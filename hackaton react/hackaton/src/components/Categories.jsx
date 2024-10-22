'use client';

import React from 'react';
import listaDeProductos from './lista/listaDeProductos';
import Product from './Product';
import CultureButton from './CultureButton';

function Categories() {
  // Agrupar los productos por categoría
  const productosPorCategoria = listaDeProductos.reduce((acc, producto) => {
    const { categoria } = producto;
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    // Agregar productos a la categoría y limitar a un máximo de 3
    if (acc[categoria].length < 3) {
      acc[categoria].push(producto);
    }
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(productosPorCategoria).map((categoria) => (
        <div key={categoria}>
          <h2>{categoria}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {productosPorCategoria[categoria].map((producto) => ( 
              <Product
                key={producto.nombre}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                comunidad={producto.comunidad}
                categoria={producto.categoria}
                disponibilidad={producto.disponibilidad}
              />
            ))}
          </div>

          <CultureButton cultura={categoria} />
        </div>
      ))}
    </div>
  );
}

export default Categories;