const Category=({title,arr})=>{
    return(
        <div className="py-2 border-bottom" style={{width:'200px',height:'max-content'}}>
            <div style={{fontSize:18,color:'black',fontWeight:600}}>{title}</div>
            {
                arr.map((item,index)=>{
                    return <div key={index} style={{cursor:'pointer'}}>{item}</div>;
                })
            }
        </div>
    );
}
export default Category