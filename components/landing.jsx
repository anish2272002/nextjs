const Landing=()=>{
    return (
        <div className="row my-2 land">
            <div className="col-12 col-md-8 py-2 py-md-0">
                <div className="d-block d-md-none">
                    <video autoPlay muted loop style={{width:'100%',height:'400px',objectFit:'cover'}}>
                        <source src="assets/landing/hero_Animation.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="d-none d-md-block">
                    <video autoPlay muted loop style={{width:'100%',height:'100%'}}>
                        <source src="assets/landing/hero_Animation.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="col-12 col-md-4 py-2 py-md-0">
                <div className="h-100">
                    <img className="image-fluid w-100 h-50 py-1" src="assets/landing/H02.1.jpg" alt="Material Depot Logo" loading="lazy"/>
                    <img className="image-fluid w-100 h-50 py-1" src="assets/landing/H03.1.jpg" alt="Material Depot Logo" loading="lazy"/>
                </div>
            </div>
        </div>
    );
}

export default Landing