const Request=()=>{
    return(
        <div className="mt-4">
            <h2 className="text-center fw-bold">
                Exclusive Material Requests
            </h2>
            <section className="rounded py-3 px-4 row flex-md-row flex-column-reverse" style={{backgroundColor:'#f5eddf!important'}}>
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center">
                    <h3 className="fw-semibold th-fontSize-18 mb-4">
                        No more wasting time and energy visiting multiple stores.
                    </h3>
                    <p>
                        Just send us a WhatsApp message with your material list, 
                        and we'll give you the best quote possible. It's that easy!
                    </p>
                    <div className="mt-4 d-flex justify-content-center align-items-center px-2 py-1 border rounded-2 
                    border-1 whatsapp-green-color-border col-md-6 col-12" style={{backgroundColor:'#20b038!important'}}>
                        <span className="th-fontSize-16 th-fontWeight-600 px-1 text-white">Get Quote on WhatsApp</span>
                    </div>
                </div>
                <div className="col-md-2"></div>
                <div className="col-12 mb-4 mb-md-0 col-md-4 text-center">
                    <img src="assets/request.webp" className="img-fluid rounded" style={{height:'100%'}} alt="Material Request"/>
                </div>
            </section>
        </div>
    );
}
export default Request;