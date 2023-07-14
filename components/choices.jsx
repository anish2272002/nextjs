import Choice from "./choice";

const Choices=()=>{
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
        <div className="mt-4 pt-4 d-none d-md-block">
            <div className="mx-auto px-2">
                <div className="d-flex flex-column align-items-center py-1">
                    <h1>Popular Choices</h1>
                    <p>Stunning Range For Your Dream Space</p>
                </div>
                <section className="d-flex justify-content-center">
                    <div className="grid_grid mx-auto">
                        {
                            choices.map((obj)=>{
                                return <Choice Key={obj.index} source={obj.src} title={obj.title}/>
                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    );
}
export default Choices;