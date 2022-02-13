import { useState } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
    const [signInState, setSignInState] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setSignInState(prev => ({...prev, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignInState({ email:'', password: '' });
    }


    return(
        <div className='sign-in'>
            <h2>I already have an account</h2>
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

                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn