"use client"
import { useEffect, useState } from "react";
import Category from "./category";

const NavBar=()=>{
    useEffect(()=>{
        import('bootstrap/dist/js/bootstrap.bundle');
    },[])
    const [show1,setshow1]=useState(false);
    const [show2,setshow2]=useState(false);
    const [showh1,setshowh1]=useState(false);
    const [showh2,setshowh2]=useState(false);
    const [showdrop1,setshowdrop1]=useState(false);
    const [showdrop2,setshowdrop2]=useState(false);
    const [showdrop3,setshowdrop3]=useState(false);
    const [showdrop4,setshowdrop4]=useState(false);
    const [showdrop5,setshowdrop5]=useState(false);
    return(
        <div className="d-flex justify-content-between py-4 py-sm-2 px-3 text-white" style={{background:'black'}}>
            <ul className="nav nav-pills gx-2 row p-1 py-md-3 px-md-4">
                <span className="nav-item col d-flex d-sm-none align-items-center" type="button" 
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4rem" viewBox="0 0 448 512">
                        <path fill='white' d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </span>

                <div className="offcanvas offcanvas-start" style={{maxWidth:'75%'}} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header px-2 py-3 h-10 bg-light">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Welcome!</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body px-2 py-0">
                        <div className="px-1 py-3">
                            Home
                        </div>
                        <div className="canvasdropdown px-1 py-3 border-top border-bottom" style={{cursor:'pointer'}}>
                            <div className="d-flex text-dark justify-content-between" onClick={()=>{setshowdrop1(!showdrop1)}}>
                                <span>Shop By Category</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                        <path fill="#0d6efd" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                    </svg>
                                </span>
                            </div>
                            {showdrop1 &&
                            <div className="ps-4">
                                <div className="pt-3">
                                    <div className="d-flex text-dark justify-content-between pe-2" onClick={()=>{setshowdrop2(!showdrop2)}}>
                                        <span>Plywood & Boards</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                                <path fill="#0d6efd" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {showdrop2 &&
                                    <div className="ps-4">
                                        <div className="pt-2">Plywood</div>
                                        <div className="pt-2">Blockboard</div>
                                        <div className="pt-2">Acrylic Board</div>
                                    </div>
                                    }
                                </div>
                                <div className="pt-3">
                                    <div className="d-flex text-dark justify-content-between pe-2" onClick={()=>{setshowdrop3(!showdrop3)}}>
                                        <span>Laminates</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                                <path fill="#0d6efd" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {showdrop3 &&
                                    <div className="ps-4">
                                        <div className="pt-2">Liner Laminates</div>
                                        <div className="pt-2">Edgebands</div>
                                        <div className="pt-2">PVC Laminates</div>
                                    </div>
                                    }
                                </div>
                                <div className="pt-3">
                                    <div className="d-flex text-dark justify-content-between pe-2" onClick={()=>{setshowdrop4(!showdrop4)}}>
                                        <span>Tiles</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                                <path fill="#0d6efd" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {showdrop4 &&
                                    <div className="ps-4">
                                        <div className="pt-2">Nano Tiles</div>
                                        <div className="pt-2">Ceiliing Tiles</div>
                                        <div className="pt-2">Full Body Tiles</div>
                                    </div>
                                    }
                                </div>
                                <div className="pt-3">
                                    <div className="d-flex text-dark justify-content-between pe-2" onClick={()=>{setshowdrop5(!showdrop5)}}>
                                        <span>Wooden Flooring</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                                                <path fill="#0d6efd" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                                            </svg>
                                        </span>
                                    </div>
                                    {showdrop5 &&
                                    <div className="ps-4">
                                        <div className="pt-2">SPC Floor</div>
                                        <div className="pt-2">Vinyl Floor</div>
                                        <div className="pt-2">Solid Wood Floor</div>
                                    </div>
                                    }
                                </div>
                            </div>
                            }
                        </div>
                        <div className="px-1 py-3">
                            All Brands
                        </div>
                        <div className="px-1 py-3">
                            <p>Contact Us</p>
                            <p>Refund Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>

                <li className="nav-item col d-flex align-items-center px-2">
                    <img src="assets/md_main_logo.png" alt="Material Depot Logo" width={100} loading="lazy"/>
                </li>
            </ul>
            <div className="nav-item d-flex align-items-center d-none d-md-flex">
                <div className="input-group mysearch">
                    <span className="input-group-text px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512">
                            <path fill="grey" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                        </svg>
                    </span>
                    <input type="text" className="form-control border-0 bg-light p-2" placeholder="Search for products..."/>
                    <span className="input-group-text px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                            <path fill="grey" d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
                        </svg>
                    </span>
                </div>
            </div>
            <div className="nav nav-pills gx-sm-2 gx-md-5 ">
                <div className="nav-item d-flex align-items-center d-none d-md-flex p-1">
                    <div className="mydropdown">
                        <span className="nav-link dropdown-toggle text-white" onMouseEnter={()=>{setshow1(true)}} onMouseLeave={()=>{
                            setTimeout(()=>setshow1(false),300);
                            }}>
                            Categories
                        </span>
                        {(show1||showh1) &&
                        <div style={{zIndex:5}} className="mydropdownitems p-4" onMouseEnter={()=>{setshowh1(true)}} onMouseLeave={()=>{setshowh1(false)}}>
                            <input type="text" className="form-control my-3" placeholder="Search categories" style={{fontSize:'14px',maxWidth:'240px'}}/>
                            <Category title={"Ceiling"} arr={["Ceiling Tiles"]}/>
                            <Category title={"Electricals"} arr={["Appliances","Electrical Accessories","Fans","Lighting","Modular Plates","Switches and Sockets","Switchgear","Wires and Cables"]}/>
                            <Category title={"Fabrics"} arr={["Fabrics"]}/>
                            <Category title={"Flooring"} arr={["Carpet Tiles","Deck Floor","Engineered Wood Floor","Laminate Wood Floor","Reclaimed Wood Floor","Solid Wood Floor","SPC Floor","Tiles","Vinyl Floor"]}/>
                            <Category title={"Glass & Composites"} arr={["Corian","Glass"]}/>
                            <Category title={"Hardware"} arr={["Drawer and Pullouts","Fasteners","Handles and Knobs","Hardware Accessories","Hardware Fittings","Hinges and Channels","Profiles and Sliders","Safes and Lockers"]}/>
                            <Category title={"Natural Stones"} arr={["Granites","Marbles","Onyx","Quartz"]}/>
                            <Category title={"Plumbing"} arr={["Adhesives","Pipes","Plumbing Fittings","Water Proofing"]}/>
                            <Category title={"Sanitaryware"} arr={["Basins","Bathroom Accessories","Bathtubs","Faucets","Kitchen Sinks","Shower","Urinals","Vanity","Water Closets"]}/>
                            <Category title={"Soft Floors"} arr={["Artificial Grass","Carpets"]}/>
                            <Category title={"Walls"} arr={["Walls","Paints","Panels","Wall Cladding","Wallpapers"]}/>
                            <Category title={"Windows and Doors"} arr={["Blinds","Doors"]}/>
                            <Category title={"Woods and Boards"} arr={["Blockboard","Composite Board","Door Skin","Edgebands","HDF","HDHMR","HPL Sheets","Laminates","MDF","Particle Board","Plywood","Prelam Boards","Veneers"]}/>
                        </div>
                        }
                    </div>
                </div>
                <div className="nav-item d-flex align-items-center d-none d-md-flex p-1">
                    <div className="mydropdown">
                        <span className="nav-link dropdown-toggle text-white" onMouseEnter={()=>setshow2(true)} onMouseLeave={()=>{
                            setTimeout(()=>{setshow2(false)},300);
                            }}>
                            Brands
                        </span>
                        {(show2||showh2) &&
                        <div className="mydropdownitems p-4" onMouseEnter={()=>{setshowh2(true)}} onMouseLeave={()=>{setshowh2(false)}}>
                            <input type="text" className="form-control my-3" placeholder="Search brands" style={{fontSize:'14px',maxWidth:'240px'}}/>
                            <Category title={"A"} arr={["Aadi","AB Lam","Accord","Ace Mica","A-Class Marble","Acrylic","Action Tesa","Adornis","Advance Laminates","AE Tiles","Affinity","AGT","AICA Sunmica","Airolam","AIS Decor","Alaska","Alcora Ceramic"]}/>
                            <Category title={"B"} arr={["Bajaj Tiles","Barcelona","Barcelona Stone Tile Expert","Bas Relief","BathandCrafts","Bathco","BEJ Ceramic","Belador","Bella Laminates","Bell Laminates","Bell Sanitaryware","Berga","Berger","B Five","Biana","Biba","Bicero Tiles LLP","Big Tiles","Bison Panel","Blackberry Tiles"]}/>
                            <Category title={"C"} arr={["Cadbury Ceramic","Cadillac Granito","Caesar","Camrola","Cap","Capron","Capstone Ceramic","Carpet Cellar","Carysil","Casa","Casper","Cefone","Century Cent Percent Tile","Century Gold","CenturyLaminates","CenturyPly","Century Prowud","Cera","Ceramic Empire","Ceramic Fashion Studio","Cera Stone","CG Wallpaper","Cibela Ceramic","Cilia Wallpapers","CJS Wallpaper","Clasico"]}/>
                            <Category title={"D"} arr={["Darpan","Dazzle Mosaic","Debora","Deceuninck","Deck","Decoage","Decolam","Decora Laminates","Decotex","Decowood","Defloors","Delhi Wall Mart","Deliso","Delta Laminates","Depotify","Designers Guild","Design Walls","Dexarte","Digital Art","Dios Casa","Divine","Donato Vitrified","Dorby Mica","Dorma","Dr.Decor","Dream Tiles World","Dr Fixit","Dulux","Dunexo","Durato","Duravit","Durian"]}/>
                            <Category title={"E"} arr={["E3 Groups","Eauset","Ebano","Ebco","Ecocrest","EcoFibre Furnishing","Ecoking","Ecostic","Ego Premium","eGrid","Elegance","Elegant Marbles","Element Decor","Elevate Interior","Elvis","Embito Granito","Emerald Tiles","Emporio Ceramic","Essco","Eternia","Eterno","Ethics Tiles","Euneca Greek","Eurobond","Euronics","Europa","Europratik"]}/>
                            <Category title={"F"} arr={["Fasten Laminates","Favourite Plus","Fea","Fedora Wallpapers","Fiandre","Finetouch","Finoble","Finolex","Fino Roccia","Floor and Furnishings","Florida Ceramic","Fos Lighting","Freedom Tree","Fuao Sanitaryware","Fusion Granito","Futura Sinks"]}/>
                        </div>
                        }
                    </div>
                </div>
                <div className="d-flex d-sm-none nav-item col align-items-center px-3 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.4rem" viewBox="0 0 512 512">
                        <path fill="white" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                </div>
                <div className="nav-item d-flex px-2 align-items-center">
                    <button className="btn btn-warning" style={{fontSize:14,minWidth:'80px'}}>Sign In</button>
                </div>
            </div>
        </div>
    );
}
export default NavBar;