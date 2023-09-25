import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./CreatePost.css";

const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",   
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/posts", data).then((response) => {
      console.log("Deu certo porra");
      //fazer o pedido para o backend criar no BD
    });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name={"title"} component={"span"} />
          <Field
            id={"inputCreatePost"}
            name={"title"}
            placeholder={"Exemplo"}
          />
          <label>Post:</label>
          <ErrorMessage name={"post"} component={"span"} />
          <Field
            id={"inputCreatePost"}
            name={"postText"}
            placeholder={"Exemplo"}
          />
          <label>Username:</label>
          <ErrorMessage name={"username"} component={"span"} />
          <Field
            id={"inputCreatePost"}
            name={"username"}
            placeholder={"Exemplo"}
          />

          <button type={"submit"}>Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
