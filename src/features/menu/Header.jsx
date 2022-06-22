import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles["header"]}>
            <div className={styles["header-logo"]}>
                <img
                    src="https://picsum.photos/seed/picsum/50"
                    alt="brand-logo"
                />
                <select>
                    <option>pick up</option>
                    <option>pick in</option>
                </select>
            </div>
            <div className={styles["header-actions"]}>
                <button
                    onClick={() => navigate("/cart")}
                    className={styles["press-btn"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17Zm0-5ZM3 9V5q0-.825.587-1.413Q4.175 3 5 3h4v2H5v4Zm6 12H5q-.825 0-1.413-.587Q3 19.825 3 19v-4h2v4h4Zm6 0v-2h4v-4h2v4q0 .825-.587 1.413Q19.825 21 19 21Zm4-12V5h-4V3h4q.825 0 1.413.587Q21 4.175 21 5v4Zm-7 6q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"></path>
                    </svg>
                </button>
                <button className={styles["search-btn"]}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075q-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};
