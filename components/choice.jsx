const Choice=({source,title})=>{
    return(
        <div className="grid_item">
            <img className="rounded-circle" height={120} width={120} 
            src={source} alt={title} loading="lazy"/>
            <p className="text-center py-1" style={{fontSize:14,fontWeight:500}}>{title}</p>
        </div>
    );
}

export default Choice;