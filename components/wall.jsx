const Wall=({title,arr})=>{
    return(
        <div className="w-100 d-block d-sm-none">
            <div className="d-flex justify-content-between py-4" style={{fontSize:24,fontWeight:600}}>
                {title}
            </div>
            <div className="row row-cols-3 gx-3">
                {
                    arr.map((obj)=>{
                        return (
                            <div className="col">
                                <img src={obj.src} alt={obj.title} className="border border-0 rounded-4" 
                                style={{width:'100%',aspectRatio:1,objectFit:'cover'}} loading="lazy"/>
                                <div className="text-center p-2 w-100 text-wrap" style={{fontSize:14}}>
                                    {obj.title}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default Wall;