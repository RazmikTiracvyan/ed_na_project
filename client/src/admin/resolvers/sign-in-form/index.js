import * as yup from 'yup';

const schema = yup.object().shape({
    login: yup.string().required('login is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export { schema }