import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function Signup({ setAuth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = { data: { token: "xyz", user: data.email } };
      localStorage.setItem("ticketapp_session", JSON.stringify(response.data));
      setAuth(true);
      toast.success("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to sign up. Please retry.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <h2>Signup</h2>
      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
        })}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email.message}</span>}
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "Minimum 6 characters" },
        })}
        placeholder="Password"
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit">Signup</button>
    </form>
  );
}
export default Signup;
