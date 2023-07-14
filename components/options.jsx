const Options=({title,arr})=>{
    return(
        <div className="my-5">
            <div className="py-2" style={{fontSize:24,fontWeight:600}}>
                {title}
            </div>
            <div className="d-none d-md-block w-100 py-4">
                {
                    arr.map((path)=>{
                        return(
                            <div className="p-2 option-item">
                                <img className="w-100 ratio ratio-1x1" src={path} alt={path} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex d-md-none" style={{overflowY:'scroll',height:'max-content'}}>
                {
                    arr.map((path)=>{
                        return(
                            <div className="p-2" style={{height:'210px'}}>
                                <img className="h-100" src={path} alt={path} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Options;