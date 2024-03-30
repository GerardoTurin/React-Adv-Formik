import { ErrorMessage, useField } from "formik";


interface MyCheckboxProps {
    label: string;
    name: string;
    [x: string]: any;   // Se le puede pasar cualquier otra propiedad.
}



const MyCheckbox = ( { label, ...props }: MyCheckboxProps ) => {
    
    const [ field ] = useField( {...props, type: 'checkbox'} );

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component={ 'span' } />
        </>
    )
};

export default MyCheckbox;