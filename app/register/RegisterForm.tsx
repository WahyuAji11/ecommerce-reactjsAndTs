"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/input";
import Heading from "../components/products/Heading";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
        console.log(data);
        setLoading(false);
    };

    return (
        <>
            <Heading title="Sign up for Kisama Apparel" />
            <Button
                outline
                label="Sign up with Google"
                icon={AiOutlineGoogle}
                onClick={() => {}}
            />
            <hr className="bg-slate-300 w-full h-px" />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            {/* <Button type="submit" disabled={isLoading} onClick={onSubmit}>
                {isLoading ? "Signing up..." : "Sign Up"}
            </Button> */}

            <Button 
            label={isLoading ? "Loading" : "Sign Up"}
            onClick={onSubmit}/>

            <p className="text-sm">Already have an account?  
                <Link className="underline" href='/login'>
                    Log in
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;
