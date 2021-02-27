import { SignIn } from './signin';
export const SignInLayout = (): JSX.Element => {
    return (
        <div className='flex'>
            <SignIn provider='github' />
            <SignIn provider='google' />
        </div>
    )
}