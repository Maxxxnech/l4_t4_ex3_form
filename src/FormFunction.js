import React, {useState} from "react";

export default function FormFunction() {
  const [comments, setComments] = useState([]);

  //Callback-ref
  var textAreaRef = null;
  function setTextAreaRefRef(el) {
    textAreaRef = el;
  }
  function submitComment(e) {
    e.preventDefault();
    if (textAreaRef && textAreaRef.value) {
      var newComment = textAreaRef.value;
      setComments([...comments, newComment]);
      textAreaRef.value = "";
    }
  }
  return (
    <div className="formFunctionWrapper">
      <h2>Функциональный компонент</h2>
      <form>
        <textarea ref={setTextAreaRefRef}></textarea>
        <button onClick={submitComment}>Отправить</button>
      </form>
      <ul>
        {comments.length
          ? comments.map((el, i) => <li key={i}>{el}</li>)
          : null}
      </ul>
    </div>
  );
}
