import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';


interface FormValues {
    name: string;
    apellido: string;
    email: string;

}



const FormikBasicPage = () => {

    const validate = (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!values.name) {
            errors.name = 'El nombre es obligatorio';
        } else if (values.name.length < 3) {
            errors.name = 'El nombre debe tener al menos 3 caracteres';
        }

        if (!values.apellido) {
            errors.apellido = 'El apellido es obligatorio';
        } else if (values.apellido.length < 3) {
            errors.apellido = 'El apellido debe tener al menos 3 caracteres';
        }

        
        if (!values.email) {
            errors.email = 'El email es obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'El email no es válido';
        }
        

        return errors;
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            apellido: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate,
    });
    return (
        <div>
            <h1>Formik Basic Page</h1>

            <form noValidate onSubmit={ formik.handleSubmit }>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre"
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.name }
                        />
                    { formik.touched.name && formik.errors.name && <span>{ formik.errors.name }</span> }
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        name="apellido" 
                        placeholder="Apellido"
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.apellido }
                        />
                    { formik.touched.apellido && formik.errors.apellido && <span>{ formik.errors.apellido }</span> }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo electrónico"
                        onBlur={ formik.handleBlur }
                        onChange={ formik.handleChange }
                        value={ formik.values.email }
                        />
                    { formik.touched.email && formik.errors.email && <span>{ formik.errors.email }</span> }
                </div>
                
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
};

export default FormikBasicPage;