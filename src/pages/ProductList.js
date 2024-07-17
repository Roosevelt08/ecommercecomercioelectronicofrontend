import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

// Define la consulta GraphQL
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      stock
      category
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div>
        {data.products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>S/.{product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Categoría: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
