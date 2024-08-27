import { useState, useContext } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";

type FormErrors = {
  name: string;
  email: string;
  password?: string;
  passwordConfirm: string | null;
  path?: string;
  [key: string]: string | null | undefined;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    path: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const router = useRouter();

  const isValid = name && email && password && passwordConfirm;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = { name, email, password, passwordConfirm };
      await schema.validate(userData, { abortEarly: false });

      router.push({
        pathname: "/",
        query: { name: userData.name },
      });
      console.log("Form is valid, submitting data:", userData);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages: FormErrors = {
          name: "",
          email: "",
          password: "",
          passwordConfirm: "",
        };
        for (const error of err.inner) {
          errorMessages[error.path || ""] = error.message;
        }
        setErrors(errorMessages);
      } else {
        console.error("An unexpected error occurred:", err);
      }
    } finally {
    }
  };

  return (
    <div className="flex justify-center pt-4 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[450px] w-[100%]"
      >
        <label htmlFor="name" className="p-2 flex flex-col">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.name && <p role="alert">{errors.name}</p>}
        </label>

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
            value={password}
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={errors.password ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.password && <p role="alert">{errors.password}</p>}
        </label>
        <label className="mb-4">
          <input
            type="checkbox"
            id="passwordConfirm"
            checked={showPassword}
            onChange={(event) => setShowPassword(event.target.checked)}
            className="mx-2"
          />
          Show password
        </label>

        <label htmlFor="passwordConfirm" className="p-2 flex flex-col">
          Confirm Password:
          <input
            type={showPasswordConfirm ? "text" : "password"}
            value={passwordConfirm}
            onChange={(event) => {
              setPasswordConfirm(event.target.value);
              if (event.target.value === password) {
                setErrors({ ...errors, passwordConfirm: "" });
              }
            }}
            aria-invalid={errors.passwordConfirm ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.passwordConfirm ? (
            <div role="alert">{errors.passwordConfirm}</div>
          ) : null}
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPasswordConfirm}
            onChange={(event) => setShowPasswordConfirm(event.target.checked)}
            className="mx-2 "
          />
          Show confirm password
        </label>

        <input
          type="submit"
          value="Sign up"
          disabled={!isValid}
          className=" p-2 mx-2 my-6 text-[var(--main-color)] w-[150px] bg-[var(--main-bg-color)]"
        />
      </form>
    </div>
  );
};

export default Signup;

