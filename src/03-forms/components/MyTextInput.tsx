import { ErrorMessage, useField } from "formik";


interface MyTextInputProps {
    label: string;
    name: string;
    type?: 'text' | 'email' | 'password';
    placeholder: string;
    [x: string]: any;   // Se le puede pasar cualquier otra propiedad.
}



const MyTextInput = ( { label, ...props }: MyTextInputProps ) => {
    
    const [ field ] = useField( props );

    return (
        <>
            <label htmlFor={ props.id || props.name }>{ label }</label>
            <input className="text-input" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component={ 'span' } />
            {/* {
                meta.touched && meta.error ? (
                    <span className="error">{ meta.error }</span>
                ) : null
            } */}
        </>
    )
};

export default MyTextInput;