import { Component } from "react";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import { getCharacterById } from "../../services/services";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {},
  };

  onCharLoaded = (res) => {
    this.setState({
      name: res.data.results[0].name,
      description: res.data.results[0].description
        ? `${res.data.results[0].description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail:
        res.data.results[0].thumbnail.path +
        "." +
        res.data.results[0].thumbnail.extension,
      homepage: res.data.results[0].urls[0].url,
      wiki: res.data.results[0].urls[1].url,
    });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacterById(id).then((res) => this.onCharLoaded(res));
  };

  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state;
    return (
      <div className="randomchar">
        <div className="randomchar__block">
          <img
            src={thumbnail}
            alt="Random character"
            className="randomchar__img"
          />
          <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{description}</p>
            <div className="randomchar__btns">
              <a href={homepage} className="button button__main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button__secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

export default RandomChar;
