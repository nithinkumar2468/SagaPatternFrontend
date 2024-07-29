import { NavLink } from 'react-router-dom';
import "./navbar.css";

function Navbar() {
   
    return (
        <div>
            <nav className=" flex px-4 border-b md:shadow-lg items-center flex-no-wrap fixed top-0 flex w-full items-center justify-between bg-[#FBFBFB] lg:flex-wrap lg:justify-start">
                <div className="text-lg font-bold md:py-0 py-4">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="./bogo.jpg"
                        alt="Bogo"
                        style={{ height: '60px', maxWidth: '150px', borderRadius: '40px' }}

                    />
                </div>
                <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
                    <NavLink to={"/"}>
                        <li>
                            <a href="/" className="flex md:inline-flex p-4 items-center hover:bg-gray-50 " style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Home</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/viewproducts"}>
                        <li>
                            <a href="/products" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Products</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/orders"}>
                        <li>
                            <a href="/orders" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Orders</span>
                            </a>
                        </li>
                    </NavLink>
                    <NavLink to={"/"}>
                        <li>
                            <a href="/" className="flex md:inline-flex p-4 items-center hover:bg-gray-50" style={{ "textDecoration": 'none' }}>
                                <span style={{"color":"royalblue","fontSize":"20px"}}>Logout</span>
                            </a>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;
