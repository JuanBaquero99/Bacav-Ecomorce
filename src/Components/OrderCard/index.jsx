const OrderCard = ({ id, title, imageUrl, price, handleDelete }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2"> 
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-light-medium">{price}</p>
                <button onClick={() => handleDelete(id)}>X</button> {/* Botón para eliminar */}
            </div>
        </div>
    );
}

export default OrderCard;
