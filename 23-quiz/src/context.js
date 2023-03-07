import axios from "axios";
<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
=======
import React, { useState, useContext } from "react";
>>>>>>> 896d9dcbc882435f4cf4cc84299458195d43e7ca

const table = {
  sports: 21,
  history: 23,
<<<<<<< HEAD
  politics: 25,
=======
  politics: 24,
>>>>>>> 896d9dcbc882435f4cf4cc84299458195d43e7ca
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

<<<<<<< HEAD
const url = "";
=======
>>>>>>> 896d9dcbc882435f4cf4cc84299458195d43e7ca

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
<<<<<<< HEAD
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
=======
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };
  const checkAnswer = (value) => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
>>>>>>> 896d9dcbc882435f4cf4cc84299458195d43e7ca
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
