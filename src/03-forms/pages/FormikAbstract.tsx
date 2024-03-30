import {  Formik, Form, } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';


const FormikAbstract = () => {


    return (
        <div>
            <h1>Formik Abstract</h1>

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
                                    <MyTextInput label='Nombre' name='name' type='text' placeholder='Nombre de usuario' />
                                </div>
                                <div>
                                    <MyTextInput label='Apellido' name='apellido' type='text' placeholder='Apellido de usuario' />
                                </div>
                                <div>
                                    <MyTextInput label='Email' name='email' type='email' placeholder='Correo electrónico' />
                                </div>

                                <div>
                                    <MyCheckbox label="Términos y Condiciones" name="terms" />
                                </div>

                                <div>
                                    <MySelect label="job Type" name="jobType">
                                        <option value="">Seleccione un tipo de trabajo</option>
                                        <option value="fulltime">Full Time</option>
                                        <option value="parttime">Part Time</option>
                                        <option value="littletime">Little Time</option>
                                    </MySelect>
                                </div>
                                <button type="submit">Enviar</button>
                            </Form>
                        )
                    }
            </Formik>
        </div>
    )
};

export default FormikAbstract;