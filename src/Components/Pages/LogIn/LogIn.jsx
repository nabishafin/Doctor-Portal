import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

const LogIn = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const {
        register, formState: { errors }, handleSubmit } = useForm()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || gLoading) {
        return
        <button className="btn loading">loading</button>
    }
    let singIError;
    if (error || gError) {
        singIError = <p>{error?.message || gError?.message}</p>
    }

    if (gUser || user) {
        console.log(gUser)
    }



    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    }



    return (
        <div className='grid justify-center items-center mt-10 mb-10'>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Log-In</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>


                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'provide a valid email'
                                    }

                                })}
                            />

                            <div className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text text-red-500">{errors.email.message}</span>}
                            </div>
                        </label>



                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'must be 6 digit'
                                    }

                                })}
                            />

                            <div className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </div>
                        </label>


                        <input className='bg-slate-800 text-white pr-2 pl-2 p-1 rounded-lg' type="submit" value="Log In" />
                        <div className='mt-2 text-red-500'>
                            {singIError}
                        </div>
                    </form>


                    <p><small>New to Doctors-Portal? <Link className='text-secondary' to='/singup'>Create New Account</Link></small></p>

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