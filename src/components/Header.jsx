import Navbar from "./NavBar";
import NavbarResponsive from "./NavBarResponsive";
import Search from "./search";
import Title from "./Title";

function Header(){
    return(
        <div className="contenedorHeader">
            <Title titulo="Despensa Coder"/>
            <Search/>
            <Navbar/>
            <NavbarResponsive/>
        </div>
        
    )
}
export default Header;
