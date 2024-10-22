import { useRouter } from 'next/router';
import listaDeProductos from '@/components/lista/listaDeProductos';
import Product from '@/components/Product';

const Cultura = () => {
  const router = useRouter();
  const { culture } = router.query;

  const productosFiltrados = listaDeProductos.filter(producto => producto.categoria === culture);

  return (
    <div>
      <h2>Productos de la categoría: {culture}</h2>
      {productosFiltrados.length > 0 ? (
        <div >
          {productosFiltrados.map((producto, index) => (
            <Product 
              key={index}
              nombre={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              comunidad={producto.comunidad}
              categoria={producto.categoria}
              disponibilidad={producto.disponibilidad}
            />
          ))}
        </div>
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default Cultura;