import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($id: ID!) {
    product(id: $id) {
      id
      name
      price
      description
    }
  }
`;

function ProductDetail() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS, {
    variables: { id }
  });

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error al cargar detalles: {error.message}</p>;

  return (
    <div>
      <h2>{data.product.name}</h2>
      <p>{data.product.description}</p>
      <p>{data.product.price}</p>
    </div>
  );
}

export default ProductDetail;
