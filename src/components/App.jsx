import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppHeader from "./AppHeader/AppHeader";
import Spinner from "./Spinner/Spinner";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage/ComicsPage"));
const SinglePage = lazy(() => import("../pages/SinglePage/SinglePage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound/PageNotFound"));
const SingleChar = lazy(() => import("../components/SingleChar/SingleChar"));
const SingleComic = lazy(() => import("../components/SingleComic/SingleComic"));

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route
              path="/comics/:id"
              element={<SinglePage Component={SingleComic} dataType="comic" />}
            />
            <Route
              path="/characters/:id"
              element={
                <SinglePage Component={SingleChar} dataType="character" />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
