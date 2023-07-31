import "./App.css";
import Card from "./components/Card";
import Login from "./components/Login";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <body className="container d-flex justify-content-center align-items-center">
        
          <Card>
            <div className="col-md-6 py-4">
              <Nav />
              <Login />
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img className="img-fluid" src="work.jpg" alt="" />
            </div>
          </Card>
        
      </body>
    </>
  );
};

export default App;
