import React from 'react';

const OrderList = ({ orders }) => {
  return (
    <div>
      <h2>My Orders</h2>
      {orders.map(order => (
        <div key={order.date}>
          <p>Date: {order.date}</p>
          <p>Total Price: {order.totalPrice}</p>
          {/* Mostrar detalles del pedido según sea necesario */}
        </div>
      ))}
    </div>
  );
};

export default OrderList;