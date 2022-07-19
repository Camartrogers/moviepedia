import Header from "../components/Header";
import Footer from "../components/Footer";

//pages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageFavs from "../pages/PageFavs";
import PageAbout from "../pages/PageAbout";
import PageSingleMovie from "../pages/PageSingleMovie";
import PageSearch from "../pages/PageSearch";

function AppRouter() {
  return (
    <BrowserRouter basename="/moviepedia">
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<PageHome sort={"popular"} />} />
            <Route
              path="/sort/popular"
              element={<PageHome sort={"popular"} />}
            />
            <Route
              path="/sort/top-rated"
              element={<PageHome sort={"top_rated"} />}
            />
            <Route
              path="/sort/now-playing"
              element={<PageHome sort={"now_playing"} />}
            />
            <Route
              path="/sort/upcoming"
              element={<PageHome sort={"upcoming"} />}
            />
            <Route path="/search" element={<PageSearch />} />
            <Route path="/movie/:id" element={<PageSingleMovie />}></Route>
            <Route path="/about" element={<PageAbout />} />
            <Route path="/favs" element={<PageFavs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
