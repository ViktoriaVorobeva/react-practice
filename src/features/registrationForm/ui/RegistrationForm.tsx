import { Button } from "@shared/ui";
import styles from './RegistrationForm.module.css';
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { useMemo } from "react";
import { initialsValues, validationSchema, type IFormValues } from "../model";
import { toast } from "react-toastify";
import { formHandler } from "@shared/lib/forms";
import { useNavigate } from "react-router-dom";
import { getMessageFromError } from "@shared/lib/common";

export const RegistrationForm = () => {
    const navigate = useNavigate();
    
    const initialFormValues = useMemo(() => initialsValues, []);

    const submitHandler = async (values: IFormValues) => {
        try {
            const returnValue = await formHandler(values);

            console.log({ returnValue });

            toast.success('Форма успешно отправлена');

            navigate('/');
        } catch (error) {
            toast.error(getMessageFromError(error));
        }
    };

    return <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={submitHandler}>
        {({ values, errors, isValid, dirty }) => (
            <Form action="/submit" method="post" className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="userName">Имя пользователя:</label>
                    <Field type="text" id="userName" name="userName" value={values.userName} />
                    <ErrorMessage name="userName" component="div" className={styles.error} />
                </div>
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
                <div className={styles.formGroup}>
                    <label htmlFor="confirmPassword">Подтверждение пароля:</label>
                    <Field type="password" id="confirmPassword" name="confirmPassword" value={values.confirmPassword} />
                    <ErrorMessage name="confirmPassword" component="div" className={styles.error} />
                </div>
                <FieldArray name="socialLinks">
                    {({ push, remove }) => (
                        <>
                            {values.socialLinks.map((_, i) => (
                                <div className={styles.social} key={i}>
                                    <Field name={`socialLinks.${i}`} placeholder="Социальные ссылки" />
                                    {!!i && (
                                        <Button onClick={() => remove(i)} color='delete'>
                                            Удалить
                                        </Button>
                                    )}
                                    <ErrorMessage name={`socialLinks.${i}`} component="div" className={styles.error} />
                                </div>
                            ))}
                            <Button onClick={() => push('')} disabled={Array.isArray(errors.socialLinks) && !!errors.socialLinks.length}>
                                Добавить ссылку
                            </Button>
                        </>
                    )}
                </FieldArray>
                <Button type="submit" disabled={!isValid || !dirty || !!Object.keys(errors).length}>Зарегистрироваться</Button>
            </Form>
         )}
  </Formik>
}