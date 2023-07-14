import Choices from "@/components/choices"
import Landing from "@/components/landing"
import Options from "@/components/options"
import { materials,tiles,designs,trending,panel,basics,style,exclusive,wall,tile } from "./text"
import Request from "@/components/request"
import Phone from "@/components/phone"
import Shop from "@/components/shop"
import Footer from "@/components/footer"
import Schoices from "@/components/schoices"
import BuyPhone from "@/components/buyphone"
import Header from "@/components/header"
import Wall from "@/components/wall"
import Sponsers from "@/components/sponsers"

const Home=()=>{
    return (
        <>
        <Header/>
        <main className="container" style={{marginTop:'12vh'}}>
            <BuyPhone/>
            <Schoices/>
            <Landing/>
            <Wall key={8} title="Wall Panel Artistry" arr={wall}/>
            <Wall key={9} title="Tile Gallery" arr={tile}/>
            <Choices/>
            <Options key={0} title={"House of Materials"} arr={materials}/>
            <Options key={1} title={"Tile Gallery"} arr={tiles}/>
            <Options key={2} title={"Designer's Choice"} arr={designs}/>
            <Request/>
            <Options key={3} title={"Trending Now"} arr={trending}/>
            <Options key={4} title={"Wall Panel Artistry"} arr={panel}/>
            <Options key={5} title={"Essential Basics"} arr={basics}/>
            <Options key={6} title={"The Style Spectrum"} arr={style}/>
            <Options key={7} title={"Material Depot Exclusives"} arr={exclusive}/>
            <Phone/>
            <Shop/>
        </main>
        <Sponsers/>
        <Footer/>
        </>
    )
}

export default Home