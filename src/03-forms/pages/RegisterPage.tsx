import { FormEvent  } from 'react';
import '../styles/styles.css';
import useForm from '../hooks/useForm';



const RegisterPage = () => {
    const { formData, onChange, resetForm, isValidEmail, name, email, password, password2 } = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });


    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Nombre" 
                        value={name} 
                        onChange={ onChange } 
                        className={ `${ name.trim().length <= 0 && 'has-error'}` }
                        />
                    {
                        name.trim().length <= 0 && <span className='error'>El nombre es obligatorio</span>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Correo electrónico" 
                        value={email} 
                        onChange={ onChange }
                        className={ `${ !isValidEmail(email) && 'has-error'}` }
                        />
                    {
                        !isValidEmail(email) && <span>El email no es válido</span>
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        onChange={ onChange }
                        className={ `${ password.trim().length <= 0 && 'has-error'}` }
                        />
                    { password.trim().length <= 0 && <span className='error'>La contraseña es obligatoria</span> }
                    { password.trim().length > 0 && password.trim().length < 6 && <span className='error'>La contraseña debe tener al menos 6 caracteres</span> }
                </div>
                <div>
                    <label htmlFor="password2">Repeat Password</label>
                    <input 
                        type="password" 
                        name="password2" 
                        placeholder="Repite Contraseña" 
                        value={password2} 
                        onChange={ onChange }
                        className={ `${ password !== password2 && 'has-error'}` }    
                        />
                    { password2.trim().length <= 0 && <span className='error'>La contraseña es obligatoria</span> }
                    { password !== password2 && <span className='error'>Las contraseñas no coinciden</span> }
                </div>
                
                <button type="submit">Register</button>
                <button type="button" onClick={ resetForm }>Reset</button>
            </form>
        </div>
    )
};

export default RegisterPage;