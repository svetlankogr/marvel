import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getComicById } from "../../services/services";
import SingleComic from "../../components/SingleComic/SingleComic";
import AppBanner from "../../components/AppBanner/AppBanner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    onComicLoading();
    getComicById(comicId).then(onComicLoaded).catch(onError);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
    setLoading(false);
  };

  const onComicLoading = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  if (!comic) {
    return (
      <>
        <AppBanner />
        {errorMessage}
        {spinner}
      </>
    );
  }
  const { title, description, pageCount, thumbnail, language, price } = comic;
  return (
    <>
      <AppBanner />
      {errorMessage}
      {spinner}
      <SingleComic
        title={title}
        description={description}
        pageCount={pageCount}
        thumbnail={thumbnail}
        language={language}
        price={price}
      />
    </>
  );
};

export default SingleComicPage;
