import React from "react";
import { useDispatch } from "react-redux";
import { removeMovie } from "../store/movies/moviesAction";

interface NameProp {
  name: string;
}
interface PriceProp {
  price: number;
}
interface IdProp {
  id: number;
}

type Props = NameProp | PriceProp | IdProp;

const Movie: React.FC<Props> = (props) => {
  const { name } = props as NameProp;
  const { price } = props as PriceProp;
  const { id } = props as IdProp;
  const dispatch = useDispatch();

  const deleteMovie = () => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <button onClick={deleteMovie}>REMOVE</button>
    </div>
  );
};

export default Movie;
