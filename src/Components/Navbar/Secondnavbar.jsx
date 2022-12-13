
import { Link } from "react-router-dom";
import navStyle from "./navbar.module.css";



export default function Secondnavbar() {
  const menuItems = [
    { title: "Home", url: "/home" },
    { title: "All", url: "/all" },
  ];

  const platformItems = [
    { title: "Pc", url: "pc" },
    { title: "Browser", url: "browser" },
  ];

  const sortedItems = [
    { title: "Released Date", url: "released-date" , type : "sort-by"},
    { title: "Popularity", url: "popularity" , type : "sort-by"},
    { title: "Alphabetical", url: "alphabetical" , type : "sort-by"},
    { title: "Relevance", url: "relevance" , type : "sort-by"},
  ];

  const categoryItems = [
    { title: "Racing", url: "racing" , type : "category"},
    { title: "Sports", url: "sports" , type : "category"},
    { title: "Shooter", url: "shooter" , type : "category"},
    { title: "Open World", url: "open-world" , type : "category"},
    { title: "Fantasy", url: "fantasy" , type : "category"},
    { title: "Action", url: "action" , type : "category"},
    { title: "Flight", url: "flight" , type : "category"},
  ];

  
  return (
    <>
      <div className={navStyle.borderNav}>
        <nav className="navbar navbar-expand-lg navbar-dark container">
          <div className="container-fluid  d-flex ">
            
            <Link className="navbar-brand" to="/home">
              <img
                src={require("../../images/logo.png")}
                alt=""
                className={navStyle.gameLogo + " fa-spin"}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse  w-25 " id="navbarSupportedContent">

            <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-around w-50">
                {menuItems.map((el, idx) => {
                  return (
                    <li className="nav-item">
                      <Link className=" nav-link" aria-current="page" to={el.url} >
                        {el.title}
                      </Link>
                    </li>
                  );
                })}

                <li>
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle text-white text-decoration-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Platform
                    </Link>
                    <ul className="dropdown-menu">
                      {platformItems.map((el, idx) => {
                        return (
                          <li className={el.type}>
                            <Link className="dropdown-item"  to={el.url}>
                              {el.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle text-white text-decoration-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort-By
                    </Link>
                    <ul className="dropdown-menu">
                      {sortedItems.map((el, idx) => {
                        return (
                          <li className={el.type}>
                            <Link className=" dropdown-item" to={el.url}>
                              {el.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle text-white text-decoration-none"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </Link>
                    <ul className="dropdown-menu">
                      {categoryItems.map((el, idx) => {
                        return (
                          <li className={el.type} >
                            <Link className="dropdown-item" to={el.url}>
                              {el.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">               
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/register">
                    <button
                      className={
                        navStyle.freeBtn + " btn btn-outline-info px-3"
                      }
                    >
                      Log Out
                    </button>
                  </Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
