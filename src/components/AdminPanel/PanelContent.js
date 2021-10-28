import Cards from "./Cards";



function PanelContent() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col  bg-light">
                        <div className="  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <p style={{ fontSize: "22px" }}> Servicios Computables SA </p>
                            <div className=" my-3 py-3">
                            <Cards/>
                            <Cards/>
                            <Cards/> 
                            <Cards/>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                            <p style={{ fontSize: "22px" }}> Emprendimientos Satelitales SA </p>
                            <div className=" my-3 py-3">
                            <Cards/>
                            <Cards/>
                            <Cards/> 
                            <Cards/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelContent;
