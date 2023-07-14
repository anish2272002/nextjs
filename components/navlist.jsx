import NavListItem from "./navlistitem";
import { navlist } from "@/app/text";

const NavList=()=>{
    return(
        <div className="d-none d-lg-flex px-5 justify-content-evenly align-items-center" 
        style={{backgroundColor:'white',zIndex:3,boxShadow:'0px 0px 2px 2px rgba(0,0,0,0.2)',position:'relative'}}>
            <NavListItem title="Plywood & Boards" arr={navlist[0]}/>
            <NavListItem title="Laminates" arr={navlist[1]}/>
            <NavListItem title="Tiles" arr={navlist[2]}/>
            <NavListItem title="Louvers & Panels" arr={navlist[3]}/>
            <NavListItem title="Quartz" arr={navlist[4]}/>
            <NavListItem title="Wooden Flooring" arr={navlist[5]}/>
            <NavListItem title="Hardware" arr={navlist[6]}/>
            <NavListItem title="Sanitaryware" arr={navlist[7]}/>
            <NavListItem title="Wallpaper" arr={navlist[8]}/>
        </div>
    );
}
export default NavList;