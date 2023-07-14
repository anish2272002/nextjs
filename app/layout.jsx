import 'bootstrap/dist/css/bootstrap.css';
import 'styles/main.css';

export const metadata={
    title:"Material Depot - One-Stop shop for Interior Design Materials",
    description:"Material Depot: Choose from over 3 lac+ products, 100+ Categories and 1000+ Brands. One stop shop for all things interior design. From Tiles to Laminates - everything you need. Shop now!"
}

const RootLayout=({children})=>{
    return(
        <html lang="en">
            <head>
                <link rel="icon" href="assets/bot-icon.png" sizes="any"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;