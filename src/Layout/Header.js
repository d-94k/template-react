import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header>
            <nav>
                <div className="logo">Logo</div>
                <button><Link to="/">Home</Link></button>
                <button><Link to="/additem">Add Item</Link></button>
            </nav>
        </header>
    );
}
 
export default Header ;