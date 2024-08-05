import { useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";

type FormErrors = {
  email: string;
  password: string;
  [key: string]: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = { email, password };
      await schema.validate(userData, { abortEarly: false });
      router.push({
        pathname: "/",
      });
      console.log("Form is valid, logging in...");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages: FormErrors = {
          email: "",
          password: "",
        };
        for (const error of err.inner) {
          errorMessages[error.path || ""] = error.message;
        }
        setErrors(errorMessages);
      } else {
        console.error("An unexpected error occurred:", err);
      }
    }
  };

  return (
    <div className="flex justify-center pt-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[450px] w-[100%]"
      >
        <label htmlFor="email" className="p-2 flex flex-col">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-invalid={errors.email ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.email && <p role="alert">{errors.email}</p>}
        </label>

        <label htmlFor="password" className="p-2 flex flex-col">
          Password:
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={errors.password ? true : false}
            className="p-2 my-2 text-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-black"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
          {errors.password && <p role="alert">{errors.password}</p>}
        </label>

        <button className=" p-2 m-2 text-black w-[150px] bg-[var(--main-color)]">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
