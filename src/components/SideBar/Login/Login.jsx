import { GoogleLogin } from '@react-oauth/google';
import s from './Login.module.css'

function Login() {

  return (
    <div className={s.googleLogin}>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </div>
  );
}

export default Login;
