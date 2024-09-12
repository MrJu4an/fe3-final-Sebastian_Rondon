
import { Route, Routes } from "react-router-dom";
import { routes } from "./Components/utils/routes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { useContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContextGlobal()

  return (
      <div className={state.theme === true ? "App dark" : "App"}>
          <Navbar/>
            <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.favs} element={<Favs />} />
              <Route path='details/:id' element={<Detail />} />
              <Route path={routes.notFound} element={<h1>Error 404 Not Found</h1>} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
