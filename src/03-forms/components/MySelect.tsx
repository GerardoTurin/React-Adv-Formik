import { ErrorMessage, useField } from "formik";


interface MySelectProps {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;   // Se le puede pasar cualquier otra propiedad.
}



const MySelect = ( { label, ...props }: MySelectProps ) => {
    
    const [ field ] = useField( props );

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component={ 'span' } />
        </>
    )
};

export default MySelect;