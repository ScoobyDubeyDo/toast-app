import { useSelector } from "react-redux";
import { DishCard } from "./DishCard";
import { Header } from "./Header";
import { selectMenuItem } from "./menuSlice";
import "./menu.css";

export const Menu = () => {
    const dishes = useSelector(selectMenuItem);

    return (
        <>
            <Header />
            <div className="card-layout">
                {dishes.map(dish => (
                    <DishCard key={dish.id} dish={dish} />
                ))}
            </div>
        </>
    );
};
