import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCart from './HeaderCartButton'
const Header = (props) => {
    return <>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCart />
        </header>
        <div className={classes['main-image']} >
            <img src={mealsImage} alt="Delicious Food" />
        </div>
    </>
};

export default Header