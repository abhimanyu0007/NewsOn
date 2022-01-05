import React,{useState} from 'react'
import { Link } from 'react-router-dom'
//import  MediaQuery from 'react-responsive';

const NavBar = (props)=> {
    
    const [alert, setAlert] = useState(0)
    //const [language, setLangauge] = useState('en')
    
    const handleIN=()=>{
        props.setCountry("IN");
        props.setCountryName("India");
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }

    const handleUS=()=>{
        props.setCountry("US");
        props.setCountryName("United States")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleUK=()=>{
        props.setCountry("GB");
        props.setCountryName("United Kingdom")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleAU=()=>{
        props.setCountry("AU");
        props.setCountryName("Australia")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleCN=()=>{
        props.setCountry("CN");
        props.setCountryName("China")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleJP=()=>{
        props.setCountry("JP");
        props.setCountryName("Japan")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleRU=()=>{
        props.setCountry("RU");
        props.setCountryName("Russia")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleIT=()=>{
        props.setCountry("IT");
        props.setCountryName("Italy")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleDE=()=>{
        props.setCountry("DE");
        props.setCountryName("Germany")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleCA=()=>{
        props.setCountry("CA");
        props.setCountryName("Canada")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleFR=()=>{
        props.setCountry("FR");
        props.setCountryName("France")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleEG=()=>{
        props.setCountry("EG");
        props.setCountryName("Egypt")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleKR=()=>{
        props.setCountry("KR");
        props.setCountryName("South Korea")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleNZ=()=>{
        props.setCountry("NZ");
        props.setCountryName("New Zealand")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    const handleBR=()=>{
        props.setCountry("BR");
        props.setCountryName("Brazil")
        setAlert(1)
        setTimeout(()=>{
            setAlert(0);
        },5000)
    }
    
     
        return (
            <div style={{display:"flex",justifyContent:"center"}}>
                {alert===1?
                <div className="alert alert-info" role="alert" 
                style={{margin:"66px 0px -91px 0px",width:"142px",padding:"5px 15px"}}>
                    Select category
                </div>:""
                }
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">

                {/* <MediaQuery minWidth={0} and maxWidth={500}>
                <h1 className="container" id="signinH1" style={{fontSize:"43px",margin:"-11px 0px 0p"}}>
                    {"Brain Champ"}
                </h1>
                </MediaQuery> */}


                    <div className="container-fluid">
                        {/* <Link className="navbar-brand" to="/">NewsOn
                        </Link> */}
                        <button className="navbar-toggler" style={{margin:"0px 0px 0px -5px"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand d-flex justify-content-start" to="/">NewsOn
                        </Link>
                        <div className="offcanvas offcanvas-start w-75" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">

                        <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">NewsOn</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body bg-dark">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>

                        {/* <form>
                        <select className="form-select w-10 bg-dark" style={{color:"white",width:"100px"}} aria-label="Default select example">
                          <option selected>Country</option>
                          <option value="IN">India</option>
                          <option value="US">US</option>
                          <option value="3">Three</option>
                        </select>
                        </form>

                        <li className="nav-item dropdown ">
                          <a className="nav-link dropdown-toggle active" id="navbarScrollingDropdown" href="/" data-bs-display="static" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Language
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark navbar-nav-scroll" aria-labelledby="navbarScrollingDropdown" id="navbarScroll" style={{maxHeight: '300px',overflowY:"auto"}}>
                          {/* <li><Link className="dropdown-item" to="/">Home</Link></li> *}
                          <li><Link className="dropdown-item" to="/business">English</Link></li>
                          <li><Link className="dropdown-item" id="hindi" to="/entertainment">Hindi</Link></li>
                          <li><Link className="dropdown-item" to="/general">Chinese</Link></li>
                          <li><Link className="dropdown-item" to="/health">French</Link></li>
                          <li><Link className="dropdown-item" to="/science">German</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Italian</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Japanese</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Korean</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Portuguese</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Russian</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Spanish</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Turkish</Link></li>

                          </ul>
                        </li> */}

                             <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle active" id="navbarScrollingDropdown" href="/" data-bs-display="static" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark navbar-nav-scroll" aria-labelledby="navbarScrollingDropdown" id="navbarScroll" style={{maxHeight: '300px',overflowY:"auto"}}>
                          <li><Link className="dropdown-item" to="/business" onClick={handleIN} >India</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleUS} >United States</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleUK} >United Kingdom</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleAU} >Australia</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleCN} >China</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleJP} >Japan</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleRU} >Russia</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleIT} >Italy</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleDE} >Germany</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleCA} >Canada</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleFR} >France</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleEG} >Egypt</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleKR} >South Korea</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleNZ} >New Zealand</Link></li>
                          <li><Link className="dropdown-item" to="/business" onClick={handleBR} >Brazil</Link></li>
                          </ul>
                        </li>  
                          

                        <li className="nav-item dropdown ">
                          <a className="nav-link dropdown-toggle active" id="navbarScrollingDropdown" href="/" data-bs-display="static" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark navbar-nav-scroll" aria-labelledby="navbarScrollingDropdown" id="navbarScroll" style={{maxHeight: '300px',overflowY:"auto"}}>
                          <li><Link className="dropdown-item" to="/business">Business</Link></li>
                          <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                          <li><Link className="dropdown-item" to="/general">General</Link></li>
                          <li><Link className="dropdown-item" to="/health">Health</Link></li>
                          <li><Link className="dropdown-item" to="/science">Science</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                          <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Politics</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Travel</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Environment</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Education</Link></li>
                          <li><Link className="dropdown-item" to="/sports">Security</Link></li>
                          </ul>
                        </li>        
                        </ul>

                        <form className="d-flex">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>






                            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li> *}
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>

                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                  </a>
                                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  {/* <li><Link className="dropdown-item" to="/">Home</Link></li> *}
                                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                  <li><Link className="dropdown-item" to="/general">General</Link></li>
                                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                    
                                  </ul>
                                </li>           
                            </ul> */}
                        </div>
                    </div>
                    </div>
                </nav>  
            </div>
        )
}
export default NavBar