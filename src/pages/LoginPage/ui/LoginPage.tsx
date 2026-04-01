import { Button } from "@shared/ui";
import styles from './LoginPage.module.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useMemo } from "react";
import { initialsValues, validationSchema } from "../model";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@features/authRouting/model/useAuth";
import { usePostAuthMutation } from "@features/authRouting/api/authApi";
import type { IFormValues } from "@features/authRouting/model/types";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [postAuth, {isError, isSuccess, data}] = usePostAuthMutation();
    const {login} = useAuth()
    
    const initialFormValues = useMemo(() => initialsValues, []);

    const submitHandler = (values: IFormValues) => {
        postAuth(values)
    };

    useEffect(() => {
        if(isSuccess) {
            login({accessToken: data.accessToken})
            navigate('/profile')
        }
    }, [isSuccess])

    return <>
    <h1>Страница входа</h1>
    <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={submitHandler}>
        {({ values, errors, isValid, dirty, isSubmitting }) => (
            <Form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" value={values.email} />
                    <ErrorMessage name="email" component="div" className={styles.error} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Пароль:</label>
                    <Field type="password" id="password" name="password" value={values.password} />
                    <ErrorMessage name="password" component="div" className={styles.error} />
                </div>
                <Button type="submit" disabled={!isValid || !dirty || !!Object.keys(errors).length || isSubmitting}>Войти</Button>
                {isError && <p className={styles.error}>Ошибка. Повторите попытку позже</p>}
            </Form>
         )}
  </Formik>
  </>
}