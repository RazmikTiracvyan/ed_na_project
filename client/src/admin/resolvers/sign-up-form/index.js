import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirm_password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

export { schema }