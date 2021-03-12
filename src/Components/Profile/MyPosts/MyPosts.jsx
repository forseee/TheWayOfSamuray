import React from "react";
import Post1 from "./Post1/Post1";
import classcss from "./MyPosts.module.css";
import { Formik, Form, Field } from "formik";

const validate = (value) => {
  let errorMessage;
  if (!value) {
    errorMessage = "Field is requared";
  }
  return errorMessage;
};

const MyForm = (props) => {
  return (
    <Formik initialValues={{ text: "" }}>
      {({ errors, touched, handleSubmit }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <h2>My Post</h2>
            <Field
              validate={validate}
              name="text"
              component="TextArea"
              placeholder="Место для воода поста"
            />
            <div>
              <button type="submit">Добавить пост</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const TextArea = ({ field, form, ...props }) => {
  return <textarea type="text" {...props} {...form} {...field} />;
};

const MyPosts = (props) => {
  console.log('render');
  let postsElements = props.posts.map((m) => (
    <Post1 key={m.id} message={m.message} like={m.likes} />
  ));

  let addPost = (value) => {
    props.addPostAction(value.text);
  };

  return (
    <div className={classcss.postBlock}>
      <MyForm onSubmit={addPost} />

      <div className={classcss.massageBlock}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
