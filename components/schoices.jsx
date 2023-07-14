const Schoices=()=>{
    const choices=[
        {index:0,src:"assets/choices/Tiles_mob.webp",title:"Tiles"},
        {index:1,src:"assets/choices/Wooden_flooring.webp",title:"Wooden Flooring"},
        {index:2,src:"assets/choices/Wallpapers.webp",title:"Wallpaper"},
        {index:3,src:"assets/choices/Sanitaryware.webp",title:"Sanitaryware"},
        {index:4,src:"assets/choices/Quartz.webp",title:"Quartz"},
        {index:5,src:"assets/choices/Panels.webp",title:"Louvers"},
        {index:6,src:"assets/choices/Mdfboard.webp",title:"MDF & Boards"},
        {index:7,src:"assets/choices/Hingesandchannels.webp",title:"Hinges & Channels"},
        {index:8,src:"assets/choices/Edgebands.webp",title:"Edgebands"},
        {index:9,src:"assets/choices/DesignerSinks.webp",title:"Quartz Sinks"},
        {index:10,src:"assets/choices/1.webp",title:"Plywood & Blockboards"},
        {index:11,src:"assets/choices/0.webp",title:"Laminates"}
    ]
    return(
        <div className="d-flex d-sm-none" style={{overflowY:'scroll',height:'max-content'}}>
            {choices.map((obj)=>{
                return(
                    <div className="mx-2 my-1">
                        <img className="rounded-circle" style={{height:100,width:100}} src={obj.src} alt={obj.title} loading="lazy" />
                        <div className="w-100 text-center pt-3">{obj.title}</div>
                    </div>
                )
            })}
        </div>
    );
}
export default Schoices;