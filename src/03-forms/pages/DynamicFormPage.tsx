import { Form, Formik } from 'formik';
import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if ( !input.validations ) continue;

    let validationSchema = Yup.string()
    
    for (const validation of input.validations) {
        
        if ( validation.type === 'required' ) {
            validationSchema = validationSchema.required('Este campo es requerido');
        }

        if ( validation.type === 'minLength' ) {
            validationSchema = validationSchema.min(( validation as any ).value, `Este campo debe tener al menos ${ ( validation as any ).value } caracteres`);
        }

        if ( validation.type === 'email' ) {
            validationSchema = validationSchema.email('El email no es válido');
        }
    }

    requiredFields[input.name] = validationSchema;
}





const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic FormPage</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object(requiredFields) }
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map(({ label, name, placeholder, type, options }) => {

                                    if ( type === 'input' || type === 'password' || type === 'email' ) {

                                        return <MyTextInput 
                                                    key={name}
                                                    label={label} 
                                                    name={name} 
                                                    placeholder={placeholder} 
                                                    type={( type as any )} 
                                                    />
                                    } else if ( type === 'select' ) {
                                        return (
                                            <MySelect key={ name } label={ label } name={ name }>
                                                <option value="">Selecciona una opción</option>
                                                {
                                                    options?.map(({ id, label }) => {
                                                        return <option key={ id } value={ id }>{ label }</option>
                                                    })
                                                }

                                            </MySelect>
                                        )
                                    }

                                    throw new Error('El tipo de input no es válido');
                                })
                            }
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default DynamicFormPage;