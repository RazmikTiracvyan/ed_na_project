import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().required('Այս դաշտը պարտադիր է').email('Էլ. փոստն անվավեր է'),
    password: yup.string().required('Այս դաշտը պարտադիր է').min(6, 'Գաղտնաբառը պետք է լինի առնվազն 6 նիշ')
});

export { schema }