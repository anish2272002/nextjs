import ShopItem from "./shopitem";
import { shoplist,tailorList } from "@/app/text";

const Shop=()=>{
    return(
        <div>
            <div className="my-5 mx-auto px-2">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text-center th-fontSize-24 th-fontWeight-600">
                        Shop with Confidence
                    </h2>
                </div>
                <section className="row mt-5">
                    {
                        shoplist.map((obj)=>{
                            return(<ShopItem Key={obj.id} src={obj.src} title={obj.title} description={obj.description} />);
                        })
                    }
                </section>
            </div>
            <div className="my-5 mx-auto">
                <div className="d-flex flex-column align-items-center">
                    <h2 className="text-center th-fontSize-24 th-fontWeight-600">
                        Tailored To You
                    </h2>
                </div>
                <section className="row mt-4" style={{justifyContent:"center"}}>
                    {
                        tailorList.map((obj)=>{
                            return(
                                <div className="col-4 col-md-2 mt-3 text-center">
                                    <img src={obj.src} alt={obj.alt} style={{width:38,height:48}} />
                                    <span className="mt-4 text d-block">{obj.title}</span>
                                </div>
                            );
                        })
                    }
                </section>
            </div>
        </div>
    );
}
export default Shop;