import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const LogIn = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user)
    }


    return (
        <div className='grid justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Log-In</h2>

                    <div className="divider">OR</div>
                    <div className="card-actions">
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn bg-gradient-to-r from-primary to-secondary'>Continue With Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;