import NavBar from "./navbar";
import NavList from "./navlist";

const Header=()=>{
    return(
        <div className="w-100 fixed-top">
            <NavBar/>
            <NavList/>
        </div>
    );
}

export default Header;