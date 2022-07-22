import Header from "./Header";
import SideBar from "./SideBar";
import Main from "./Main";


function App() {
  return (
      <>
      <Header />
      <div className="d-flex">
        <SideBar />
        <Main />
      </div>
      </>
  );
}

export default App;
