"use client"
import { useState } from "react";

const NavSubListItem=({object})=>{
    return (
        <div className="border-end py-2 px-3 d-block" style={{height:'65vh'}}>
            <div className="py-2" style={{color:'#2a7fff',fontWeight:600,width:'200px'}}>{object.title}</div>
            {
                object.arr.map((item)=>{
                    return <div className="py-2" style={{width:'200px',color:'rgba(0,0,0,0.6)',fontWeight:400}}>{item}</div>;
                })
            }
        </div>
    );
}

const NavListItem=({title,arr})=>{
    const [show,setshow]=useState(false);
    const [showh,setshowh]=useState(false);
    return(
        <>
            <div className={(show||showh)?"py-2 navlistitem navlistitemh":"py-2 navlistitem"} onMouseEnter={()=>{setshow(true)}} onMouseLeave={()=>{setTimeout(()=>setshow(false),300)}}>
                <span style={{fontWeight:600}}>{title}</span>&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
            </div>
            {(show||showh) && 
            <div className="d-flex align-items-center bg-light rounded mynavlistitems" onMouseEnter={()=>{setshowh(true)}} onMouseLeave={()=>{setshowh(false)}}
            style={{position:'absolute',top:'6vh',left:'10vw',height:'65vh',width:'80vw',overflowY:'scroll'}}>
                {
                    arr.map((obj)=>{
                        return <NavSubListItem object={obj}/>
                    })
                }
            </div>
            }
        </>
    );
}
export default NavListItem;