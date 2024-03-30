import { ChangeEvent, useState } from "react";

const useForm = <T>( initialData: T ) => {
    const [ formData, setFormData ] = useState(initialData);


    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value     // Se asigna el valor del input al campo correspondiente.
        });
    };

    const resetForm = () => {
        setFormData(initialData);
    };


    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    return { 
            ...formData,
            
            // Propiedades
            formData,

            // Metodo
            onChange,
            resetForm,
            isValidEmail
        };
};

export default useForm