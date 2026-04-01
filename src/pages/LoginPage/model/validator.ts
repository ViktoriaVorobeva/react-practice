import type { IFormValues } from '@features/authRouting/model/types';
import * as yup from 'yup';

export const validationSchema: yup.ObjectSchema<IFormValues> = yup.object({
    email: yup.string().trim().required('email обязателен').email('Email должен содержать @'),
    password: yup.string().required('Пароль обязателен'),
});
