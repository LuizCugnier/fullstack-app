import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

import "./CreateUser.css";

const CreateUser = () => {
    let navigate = useNavigate();

    const initialValues = {
        username: "",
        senha: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        senha: Yup.string().required(),
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        axios.post("http://localhost:3301/users", data).then((response) => {
            navigate("/");
        });
    };

    return (
        <div className="createUserPage">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <Form className="formContainer">
                    <label>Username:</label>
                    <ErrorMessage name={"username"} component={"span"} />
                    <Field
                        id={"inputCreatePost"}
                        name={"username"}
                        placeholder={"username"}
                    />
                    <label>Senha:</label>
                    <ErrorMessage name={"senha"} component={"span"} />
                    <Field
                        id={"inputCreatePost"}
                        name={"senha"}
                        type={showPassword ? "text" : "password"}
                        placeholder={"senha"}
                    />
                    <div className="divButtons">
                        <button
                            className={"toggleButton"}
                            type="button"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "" : ""}
                        </button>
                        <button type={"submit"} className="createButton">
                            Create User
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default CreateUser;
