import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  userName: Yup.string().required("UserName is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});


export const signupValidationSchema = Yup.object().shape({
    userName: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits long').required('Phone is required'),
  });