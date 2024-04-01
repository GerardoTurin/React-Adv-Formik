import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import logo from "../assets/react.svg";
import { DynamicFormPage, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage, RegisterPage } from "../03-forms/pages";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" style={{ width: '100px', marginTop: '20px' }} />

                        <ul>
                            <li>
                                <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register-formik" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Formik</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstractation</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/register-formik" element={<RegisterFormikPage />} />
                        <Route path="/formik-basic" element={<FormikBasicPage />} />
                        <Route path="/formik-yup" element={<FormikYupPage />} />
                        <Route path="/formik-components" element={<FormikComponents />} />
                        <Route path="/formik-abstractation" element={<FormikAbstract />} />
                        <Route path="/dynamic-form" element={<DynamicFormPage />} />
                        <Route path="*" element={ <Navigate to="/home" replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
};

export default Navigation;