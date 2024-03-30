import {  useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


const FormikYupPage = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            apellido: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('El nombre es requerido')
                .min(3, 'El nombre debe tener al menos 3 caracteres'),
            apellido: Yup.string()
                .required('El apellido es requerido')
                .min(3, 'El apellido debe tener al menos 3 caracteres'),
            email: Yup.string()
                .email('El email no es válido')
                .required('El email es requerido'),
        }),
    });


    return (
        <div>
            <h1>Formik Yup Page</h1>

            <form noValidate onSubmit={ formik.handleSubmit }>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        placeholder="Nombre"
                        { ...formik.getFieldProps('name') }
                        />
                    { formik.touched.name && formik.errors.name && <span>{ formik.errors.name }</span> }
                </div>
                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        placeholder="Apellido"
                        { ...formik.getFieldProps('apellido') }
                        />
                    { formik.touched.apellido && formik.errors.apellido && <span>{ formik.errors.apellido }</span> }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="Correo electrónico"
                        { ...formik.getFieldProps('email') }
                        />
                    { formik.touched.email && formik.errors.email && <span>{ formik.errors.email }</span> }
                </div>
                
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
};

export default FormikYupPage;