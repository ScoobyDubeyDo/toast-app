import { useDispatch } from "react-redux";
import { addTocart } from "../cart/cartSlice";
import styles from "./dishCard.module.css";

export const DishCard = ({ dish }) => {
    const { title, price, imUrl } = dish;
    const dispatch = useDispatch();

    const addToCart = dish => {
        dispatch(addTocart(dish));
    };

    return (
        <div className={styles["dish-card"]}>
            <div className={styles["card-img"]}>
                <img src={imUrl} alt={imUrl} />
            </div>
            <p className="card-title">{title}</p>
            <div className={styles["card-footer"]}>
                <p className="card-dish-price">{price}</p>
                <button
                    className={styles["card-action-btn"]}
                    onClick={() => addToCart(dish)}>
                    Add
                </button>
            </div>
        </div>
    );
};
