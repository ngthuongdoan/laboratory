import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
type SignUpPageProps = {};

const SignUpPage: React.VFC<SignUpPageProps> = (props) => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function handleSubmit(e: FormEvent) {
        try {
            e.preventDefault();
            await axios.post("http://localhost:8080/api/1.0/users", {
                username: usernameRef.current?.value,
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
            });
        } catch (error) {}
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    ref={usernameRef}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                />
                <label htmlFor="password-repeat">Password Repeat</label>
                <input
                    id="password-repeat"
                    type="password"
                    placeholder="Password Repeat"
                />
                <br />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignUpPage;
