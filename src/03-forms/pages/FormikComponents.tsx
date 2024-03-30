import {  Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


const FormikComponents = () => {


    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    name: '',
                    apellido: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                        .required('El nombre es requerido')
                        .min(3, 'El nombre debe tener al menos 3 caracteres'),
                    apellido: Yup.string()
                        .required('El apellido es requerido')
                        .min(3, 'El apellido debe tener al menos 3 caracteres'),
                    email: Yup.string()
                        .email('El email no es válido')
                        .required('El email es requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar los términos y condiciones'),
                    jobType: Yup.string()
                        .required('El tipo de trabajo es requerido')
                        .notOneOf(['littletime'], 'No se acepta el tipo de trabajo "littletime"')
                })}>
                    {
                        formik => (
                            <Form>
                                <div>
                                    <label htmlFor="name">Nombre</label>
                                    <Field 
                                        type="text" 
                                        name="name"
                                        placeholder="Nombre"
                                        />
                                    <ErrorMessage name="name" component={ 'span' } />
                                </div>
                                <div>
                                    <label htmlFor="apellido">Apellido</label>
                                    <Field 
                                        type="text" 
                                        placeholder="Apellido"
                                        name="apellido"
                                        />
                                    <ErrorMessage name="apellido" component={ 'span' } />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field 
                                        type="email" 
                                        placeholder="Correo electrónico"
                                        name="email"
                                        />
                                    <ErrorMessage name="email" component={ 'span' } />
                                </div>

                                <div>
                                    <label>
                                        <Field 
                                            type="checkbox" 
                                            name="terms"
                                            />
                                        Términos y Condiciones
                                    </label>
                                    <ErrorMessage name="terms" component={ 'span' } />
                                </div>

                                <div>
                                    <label htmlFor="jobType">Tipo de trabajo</label>
                                    <Field 
                                        as="select"
                                        name="jobType"
                                        >
                                        <option value="">Seleccione un tipo de trabajo</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="littletime">Little Time</option>
                                    </Field>
                                    <ErrorMessage name="jobType" component={ 'span' } />
                                </div>
                                <button type="submit">Enviar</button>
                            </Form>
                        )
                    }
            </Formik>
        </div>
    )
};

export default FormikComponents;