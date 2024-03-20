import React, { useState } from "react";

const FunctionalObject = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="johndoe1"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FunctionalObject;
