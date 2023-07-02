import { Routes, Route, Router } from "react-router-dom";
import AppHeader from "./AppHeader/AppHeader";
import { MainPage, ComicsPage } from "../pages";

const App = () => {
  return (
    <div className="app">
      <AppHeader />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/comics" element={<ComicsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
