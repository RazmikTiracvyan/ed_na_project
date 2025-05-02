import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Այս դաշտը պարտադիր է').min(2, 'Անունը պետք է լինի առնվազն 2 նիշ'),
    email: yup.string().required('Այս դաշտը պարտադիր է').email('Էլ. փոստն անվավեր է'),
    password: yup.string().required('Այս դաշտը պարտադիր է').min(6, 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ'),
    confirm_password: yup.string().required('Այս դաշտը պարտադիր է').min(6, 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ')
});

export { schema }