
function Cards() {
    return (

        <div className="row" >
            <div className="col d-flex justify-content-center">
                <div className=" my-3 py-3">
                    <div className="shadow p-3 mb-5 bg-body rounded " style={{ width: "18rem" }}>
                    <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Titulo" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                            </div>
                        <div className="card-body text-dark">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Importes" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                            </div>
                            <hr/>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Info" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                            </div>
                            <button class="btn btn-outline-dark" type="button" id="button-addon1">Editar</button>
                            <button class="btn btn-outline-dark" type="button" id="button-addon1" style={{marginLeft:"10px"}}>Guardar</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col d-flex justify-content-center">
                <div className="my-3 py-3">
                    <div className="shadow p-3 mb-5 bg-body rounded " style={{ width: "18rem" }}>
                        <div className="card-header  mb-3">Titulo</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">1.045.154</h5>
                            <p className="card-text">informacion</p>
                            <button class="btn btn-outline-dark" type="button" id="button-addon1">Editar</button>
                            <button class="btn btn-outline-dark" type="button" id="button-addon1" style={{marginLeft:"10px"}}>Guardar</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cards;
