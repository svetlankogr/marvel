import { Routes, Route, Router } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import { MainPage, ComicsPage, SingleComicPage, PageNotFound } from "../pages";

const App = () => {
  return (
    <div className="app">
      <AppHeader />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:comicId" element={<SingleComicPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
