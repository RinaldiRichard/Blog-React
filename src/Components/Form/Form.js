import React, { useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";

export default function Form() {
  const [article, setArticle] = useState({
    title: "",
    body: "",
  });
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    dispatch ({
      type: "ADDARTICLE",
      payload: article
    })
    setArticle ({
      title:"",
      body:""
    })
  };
  const handleInput = (e) => {
    if (e.target.classList.contains('inp-title')){
        const newObjState={
            ...article,
            title:e.target.value
        }
        setArticle(newObjState)
    } else if (e.target.classList.contains('inp-body')){
        const newObjState={
            ...article,
            body:e.target.value
        }
        setArticle(newObjState)
    }
  };
console.log(article);
  return (
    <>
      <h1 className="title-form">Écrivez un article</h1>

      <form className="container-form" onSubmit={handleForm}>
        <label htmlFor="title">Titre</label>
        <input
          className="inp-title"
          onInput={handleInput}
          value={article.title}
          type="text"
          id="title"
          placeholder="Entrez votre nom"
        />
        <label htmlFor="article">Votre article</label>
        <textarea
          className="inp-body"
          onInput={handleInput}
          value={article.body}
          id="article"
          placeholder="Votre article"
        ></textarea>
        <button>Envoyer l'article</button>
      </form>
    </>
  );
}
