import { useState } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';

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
        // try{
        //     const user = await auth.signInWithEmailAndPassword(email, password);
        //     console.log(user);
        //     setSignInState({ email:'', password: '' });
        // }
        // catch(error) {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     if(errorCode === 'auth/wrong-password') {
        //         alert('Invalid password or email. Try again');
        //     }
        // }
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
                    <CustomButton type='button' onClick={() => googleSignInStart()} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);