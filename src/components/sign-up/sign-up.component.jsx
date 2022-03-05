import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
    const [newUser, setNewUser] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = newUser;

        if(password !== confirmPassword) {
            alert('Passwords do not match. Try again');
            return;
        }

        signUpStart({ displayName, email, password });
    }

    const handleChange = (event) => {
        const { value, name } = event.target;
        setNewUser(prev => ({ ...prev, [name]: value }));
    }

    return(
        <SignUpContainer>
            <SignUpTitle>I do not have a account</SignUpTitle>
            <span>Sign up with your email and passsword</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text' 
                    name='displayName' 
                    value={newUser.displayName} 
                    onChange={handleChange} 
                    label='Display Name' 
                    required
                />
                <FormInput
                    type='email' 
                    name='email' 
                    value={newUser.email} 
                    onChange={handleChange} 
                    label='Email' 
                    required
                />
                <FormInput
                    type='password' 
                    name='password' 
                    value={newUser.password} 
                    onChange={handleChange} 
                    label='Password' 
                    required
                />
                <FormInput
                    type='password' 
                    name='confirmPassword' 
                    value={newUser.confirmPassword} 
                    onChange={handleChange} 
                    label='Confirm Password' 
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
}

const mapDispachToProps = (dispatch) => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispachToProps)(SignUp);