import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getComicById } from "../../services/services";
import { getCharacterById } from "../../services/services";
import AppBanner from "../../components/AppBanner/AppBanner";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "../../components/Spinner/Spinner";

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    updateData();
  }, [id]);

  const updateData = () => {
    onDataLoading();
    clearError();
    switch (dataType) {
      case "comic":
        getComicById(id).then(onDataLoaded).catch(onError);
        break;
      case "character":
        getCharacterById(id).then(onDataLoaded).catch(onError);
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
    setLoading(false);
  };

  const onDataLoading = () => {
    setLoading(true);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const clearError = useCallback(() => setError(null), []);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? (
    <Component data={data} />
  ) : null;

  return (
    <>
      <AppBanner />
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

export default SinglePage;
