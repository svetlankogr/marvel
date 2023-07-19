import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../../components/RandomChar/RandomChar";
import CharList from "../../components/CharList/CharList";
import CharInfo from "../../components/CharInfo/CharInfo";
import CharSearchForm from "../../components/CharSearchForm/CharSearchForm";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import decoration from "../../resources/img/vision.png";

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <div>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm charId={selectedChar} />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  );
};

export default MainPage;
