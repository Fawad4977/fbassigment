


function Header(props){
       
    const {title,username,profilePic}=props
    
    
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{username}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              
              <li className="nav-item">
                <a className="nav-link" href="/"><img width={100} src={profilePic}/></a>
              </li>
            </ul>
            <span className="navbar-text">
            <h3>{title}</h3>

            </span>
          </div>
        </div>
      </nav>

    )
       
    
        




    








}

export default Header;