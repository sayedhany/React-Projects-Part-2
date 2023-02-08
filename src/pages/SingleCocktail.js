import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const { data } = await axios(`${url}${id}`);
        if (data.drinks) {
          const { drinks } = data;
          console.log(drinks);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
  return (
    <div>
      <h2>single cocktail page {id}</h2>
    </div>
  );
};

export default SingleCocktail;
