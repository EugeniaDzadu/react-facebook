import { Link } from "react-router-dom";

Link

function Index(){
    return(
          <>
        <div className="container">
        
        <div className="row">

            
            <div className="col">
                <img src="/fb_icon.svg" className="img-fluid w-50" alt=""/>
                <span className="d-block h5 mx-4">Connect with friends and the world<span className="d-block">around you on Facebook.</span></span>
            </div>
            <div className="col">
                <form id="formcontainer">

                    <input type="text" className="form-control mt-3 w-75 p-2 " placeholder="Email or phone number"/>
                    <input type="text" className="form-control mt-3 w-75 p-2" placeholder="Password"/>

                    <Link to="" className="btn btn-primary w-75 p-1 mt-3 fw-bolder fs-4 login">Log In</Link>
                    <span className="d-block text-center w-75 mt-3" style={{marginLeft: "10%"}}><Link to="">Forgot Password?</Link></span>
                    <hr className="w-75 mt-3" style={{marginLeft: "10%"}}/>
                    <span><Link to="" className="btn btn-success w-40 p-2 fw-bolder" style={{marginLeft: "30%"}}>Create new account</Link></span>
                </form>

                <div><p> <strong>Create a Page</strong> for a celebrity, brand or business.</p></div>

            </div>

        </div>

      </div>
          </>

    )
}

export default Index;