import { useState } from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [signInState, setSignInState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setSignInState(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = signInState;
        emailSignInStart(email, password);
    }


    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    value={signInState.email} 
                    handleChange={handleChange}
                    label='Email' 
                    required
                />

                <FormInput 
                    name='password' 
                    type='password' 
                    value={signInState.password} 
                    handleChange={handleChange} 
                    label='Password' 
                    required 
                />

                <ButtonsBarContainer>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={() => googleSignInStart()} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);