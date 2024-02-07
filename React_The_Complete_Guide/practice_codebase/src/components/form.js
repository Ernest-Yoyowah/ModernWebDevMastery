import React from "react";

const Form = () => {
  const nameChangeHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="form">
      <form>
        <label>Name</label>
        <input type="text" onChange={nameChangeHandler} />
      </form>
    </div>
  );
};

export default Form;
