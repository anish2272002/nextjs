const Phone=()=>{
    return (
        <div className="row th-container align-items-center">
            <div className="col-md-6 text-center">
                <img src="assets/get_app_banner.png" className="img-fluid" loading="lazy" />
            </div>
            <div className="col-md-6 py-3">
                <h3 className="th-fontSize-14px th-fontWeight-700 py-2">
                    Get your materials needs on your phone.
                </h3>
                <p className="th-fontSize-12px">
                Download the Material Depot app curates materials from top lining brands for 
                ready to be deployed for your 3D renderings.
                </p>
                <div className="d-flex py-3">
                    <img src="assets/googleplay.svg" alt="Android app image" className="img-fluid" loading="lazy"/>
                </div>
            </div>
        </div>
    );
}
export default Phone;