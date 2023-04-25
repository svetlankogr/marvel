import { Component } from "react";
import { getAllCharacters } from "../../services/services";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./comicsList.scss";

class ComicsList extends Component {
  state = {
    characters: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    getAllCharacters().then(this.onCharactersLoaded).catch(this.onError);
  }

  onCharactersLoaded = (characters) => {
    this.setState({
      characters,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };
  renderItems(array) {
    const items = array.map((item) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }
      return (
        <li className="comics__item" key={item.id}>
          <a href="#">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="comics__item-img"
              style={imgStyle}
            />
            <div className="comics__item-name">{item.name}</div>
          </a>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  }
  render() {
    const { characters, loading, error } = this.state;
    const itemsList = this.renderItems(characters);
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? itemsList : null;
    return (
      <div className="comics__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default ComicsList;
