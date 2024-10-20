import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";
import NavBarResponsive from "./NavBar/NavBarResponsive";
import Search from "./NavBar/Search";
// import Title from "./Title";

function Header(){
    return(
        <div className="contenedorHeader">
            <Logo/>
            <Search/>
            <NavBar/>
            <NavBarResponsive/>
        </div>
        
    )
}
export default Header;
