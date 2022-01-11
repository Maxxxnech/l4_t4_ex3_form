import React, { Component, createRef } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    //Callback-ref
    // this.texInput = null;
    // this.setTextInputRef = (el) => {
    //   this.texInput = el;
    // };
    this.textAreaRef = createRef();
    this.state = { comments: [] };
    this.submitComment = this.submitComment.bind(this);
  }

  submitComment(e) {
    //Prevent form sending
    e.preventDefault();

    if (this.textAreaRef && this.textAreaRef.current.value) {
       var value =  this.textAreaRef.current.value;
       this.setState((prevState) => ({
         comments: [...prevState.comments, value],
       }));
       this.textAreaRef.current.value  = "";
    }
  }

  render() {
    return (
      <div className="formComonentWrapper">
        <h2>Классовый компонент</h2>
        <form>
          <textarea ref={this.textAreaRef}></textarea>
          <button onClick={this.submitComment}>Отправить</button>
        </form>
        <ul>
          {this.state.comments.length?
            this.state.comments.map((el, i) => <li key={i}>{el}</li>) : null}
        </ul>
      </div>
    );
  }
}
