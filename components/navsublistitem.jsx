const NavSubListItem=({object})=>{
    return (
        <div className="border-end py-2 px-3 d-block" style={{height:'65vh'}}>
            <div className="py-2" style={{color:'#2a7fff',fontWeight:600,width:'200px'}}>{object.title}</div>
            {
                object.arr.map((item,index)=>{
                    return <div key={index} className="py-2" style={{width:'200px',color:'rgba(0,0,0,0.6)',fontWeight:400}}>{item}</div>;
                })
            }
        </div>
    );
}
export default NavSubListItem;