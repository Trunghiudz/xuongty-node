import { useLocalStorage } from "@/hooks/useStorage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form"
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { error } from "console";
import { Navigate, useNavigate } from "react-router-dom";
const signinSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).min(3).required(),
    password: Joi.string().min(6).required()
})
const Lognin = () => {
    const navigate = useNavigate()
    const [, setUser] = useLocalStorage('user', {})
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: joiResolver(signinSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const { mutate } = useMutation({
        mutationFn: async (formData: { email: string, password: string }) => {
            const { data } = await axios.post("http://localhost:3000/api/v1/auth/signin", formData);
            return data
        },
        onSuccess: () => {
            (data: any) => setUser(data)
            navigate('/')
        },


        onError: (error) => console.log(error)
    })
    const onSubmit = (formData: { email: string, password: string }) => {
        mutate(formData)
    }
    return (
        <div>
            <section className="login">
                <div className="container">
                    <div className="login-signin">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="text" {...register('email', { required: true, minLength: 6 })} required placeholder="Email" />
                                {errors.email && <p>{errors.email.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" {...register('password', { required: true, minLength: 6 })} required placeholder="Password" />
                                {errors.password && <p>{errors.password.message}</p>}
                            </div>
                            <div className="form-group">
                                <button type="submit">Login</button>
                            </div>
                            <div className="form-group">
                                <button type="submit">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lognin
