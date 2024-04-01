import '../styles/styles.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';



const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                        .required('El nombre es requerido')
                        .min(2, 'El nombre debe tener al menos 2 caracteres')
                        .max(15, 'El nombre debe tener como máximo 15 caracteres'),
                    email: Yup.string()
                        .email('El email no es válido')
                        .required('El email es requerido'),
                    password: Yup.string()
                        .required('La contraseña es requerida')
                        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
                    password2: Yup.string()
                        .required('La contraseña es requerida')
                        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),
                })}>
                    {
                        ({handleReset}) => (
                            <Form>
                                <MyTextInput 
                                    label='Nombre' 
                                    name='name' 
                                    type='text' 
                                    placeholder='Nombre' 
                                />

                                <MyTextInput 
                                    label='Email' 
                                    name='email' 
                                    type='email' 
                                    placeholder='Correo electrónico'
                                />

                                <MyTextInput 
                                    label='Contraseña' 
                                    name='password' 
                                    type='password' 
                                    placeholder='Contraseña'
                                />

                                <MyTextInput 
                                    label='Repetir contraseña' 
                                    name='password2' 
                                    type='password' 
                                    placeholder='Repetir contraseña'
                                />
                                <button type="submit">Enviar</button>
                                <button type="button" onClick={ handleReset }>Limpiar</button>

                            </Form>
                        )
                    }
                
            </Formik>
        </div>
    )
};

export default RegisterFormikPage;