import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/images/eliminar.svg";

const Cart = () => {
    const { cart, removeItem, clear, getCountProducts, getSumProducts } = useContext(CartContext);

    if (getCountProducts() === 0) {
        return (
            <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h3>El carrito esta vacio!</h3>
                    <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Ir a la página principal</Link>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn btn-dark" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-start">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">x{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.precio}</td>
                                    <td className="align-middle text-end">
                                        <img
                                            src={trash}
                                            width={24}
                                            alt="Eliminar Producto"
                                            title="Eliminar Producto"
                                            onClick={() => { removeItem(item.id) }}
                                            className="hover-effect pointer-cursor"
                                        />
                                    </td>


                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-dark">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;