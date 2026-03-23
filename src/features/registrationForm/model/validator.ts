import * as yup from 'yup';
import type { IFormValues } from './types';

export const validationSchema: yup.ObjectSchema<IFormValues> = yup.object({
    userName: yup.string().trim().required('Имя пользователя обязательно'),
    email: yup.string().trim().required('email обязателен').email('Email должен содержать @'),
    password: yup.string().required('Пароль обязателен').min(6, 'Минимум 6 символов'),
    confirmPassword: yup.string().trim().required('Подтверждение пароля обязательно').oneOf([yup.ref('password'), ''], 'Подтверждение пароля должно совпадать с паролем'),
    socialLinks: yup.array().of(yup.string().trim().url('Некорректный URL').required('URL обязателен')).min(1, 'Добавьте хотя бы одну ссылку').required()
});
