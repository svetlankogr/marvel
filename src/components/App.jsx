import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppHeader from "./AppHeader/AppHeader";
import Spinner from "./Spinner/Spinner";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage/ComicsPage"));
const SingleComicPage = lazy(() =>
  import("../pages/SingleComicPage/SingleComicPage")
);
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:comicId" element={<SingleComicPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
