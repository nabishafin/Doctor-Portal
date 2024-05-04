import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';



const SingUp = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const {
        register, formState: { errors }, handleSubmit } = useForm()


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uperror] = useUpdateProfile(auth);

    if (loading || gLoading || uperror) {
        return

    }
    const navigate = useNavigate()
    let singIError;

    if (error || gError || uperror) {
        singIError = <p>{error?.message || gError?.message || uperror.message}</p>
    }

    if (gUser || user) {
        console.log(gUser)
    }



    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        navigate('/appointment')
    }



    return (
        <div>
            <div className='grid justify-center items-center mt-10 mb-10'>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Sing-Up</h2>

                        <form onSubmit={handleSubmit(onSubmit)}>


                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Name</span>
                                </div>
                                <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        },
                                    })}
                                />

                                <div className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt  text-red-500">{errors.name.message}</span>}
                                </div>
                            </label>
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


                            <input className='bg-slate-800 text-white pr-2 pl-2 p-1 rounded-lg' type="submit" value='Sing Up' />
                            <div className='mt-2 text-red-500'>
                                {singIError}
                            </div>
                        </form>


                        <p><small>All Ready Have an account? <Link className='text-secondary' to='/login'>Plz LogIn</Link></small></p>

                        <div className="divider">OR</div>
                        <div className="card-actions">
                            <button
                                onClick={() => createUserWithEmailAndPassword()}
                                className='btn bg-gradient-to-r from-primary to-secondary'>Continue With Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;