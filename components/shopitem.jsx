const ShopItem=({src,title,description})=>{
    return (
        <div className="col-6 col-md-3 text-center">
            <img src={src} alt={title} style={{width:68,height:68}} />
            <span className="mt-4 text d-block">{title}</span>
            <p className="text-caption">{description}</p>
        </div>
    );
}
export default ShopItem;