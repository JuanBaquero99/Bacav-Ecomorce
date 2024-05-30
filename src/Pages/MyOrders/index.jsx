import React, { useContext } from 'react';
import Layout from "../../Components/Layout";
import OrderList from "../../Components/OrderList"; // Suponiendo que tienes un componente OrderList para mostrar la lista de pedidos
import { ShoppingCartContext } from '../../Context';

const MyOrders = () => {
    const { order } = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-semibold mb-4">My Orders</h1>
                {order.length > 0 ? (
                    <OrderList orders={order} />
                ) : (
                    <p>No orders yet.</p>
                )}
            </div>
        </Layout>
    );
};

export default MyOrders;