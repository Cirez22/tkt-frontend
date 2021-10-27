function Dashnavbar () {
    return ( 
        <div>
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{width:"280px", height:"100%"}} >
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#1" class="nav-link active" aria-current="page">
          Home
        </a>
      </li>
      <li>
        <a href="#1" class="nav-link link-dark">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#1" class="nav-link link-dark">
          Orders
        </a>
      </li>
      <li>
      <a href="#1" class="nav-link link-dark">
          Products
        </a>
      </li>
      <li>
        <a href="#1" class="nav-link link-dark">
          Customers
        </a>
      </li>
    </ul>
    <hr/>
    
  </div>
        </div>
    )
}

export default Dashnavbar;