import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from '../../components/sign-up/sign-up.component';

const SignInSignUpPage = () => {
    return (
        <SignInAndSignUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndSignUpContainer>
    );
}

export default SignInSignUpPage;