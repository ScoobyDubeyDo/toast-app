import { useSelector } from "react-redux";
import { selectCartItem } from "./cartSlice";

export const Cart = () => {
    const cartDishes = useSelector(selectCartItem);

    return (
        <div>
            {cartDishes.map(dish => (
                <>
                    <h1> {dish.title}</h1>
                    <h1> {dish.price}</h1>
                </>
            ))}
        </div>
    );
};
