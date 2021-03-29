import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../store/movies/moviesAction";

const AddMovie: React.FC = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const dispatch = useDispatch();
  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const updatePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const onAddMove = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(addMovie(name, price));
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={onAddMove}>
      <input
        type="text"
        name="name"
        required
        value={name}
        placeholder="Name"
        onChange={updateName}
      />
      <input
        type="number"
        name="price"
        required
        value={price}
        placeholder="Price"
        onChange={updatePrice}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default AddMovie;
