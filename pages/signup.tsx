import { useState } from "react";

export default function Signup() {
  type FormErrors = {
    name?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (!email) newErrors.email = "Please enter your email";
    if (!password) newErrors.password = "Please enter a password";
    if (password !== passwordConfirm)
      newErrors.passwordConfirm = "Passwords do not match";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
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
            aria-required="true"
            aria-invalid={errors.name ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.name && <div role="alert">{errors.name}</div>}
        </label>

        <label htmlFor="email" className="p-2 flex flex-col">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            aria-required="true"
            aria-invalid={errors.email ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.email && <div role="alert">{errors.email}</div>}
        </label>

        <label htmlFor="password" className="p-2 flex flex-col">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-required="true"
            aria-invalid={errors.password ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.password && <div role="alert">{errors.password}</div>}
        </label>

        <label htmlFor="passwordConfirm" className="p-2 flex flex-col">
          Confirm Password:
          <input
            type="password"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
            aria-required="true"
            aria-invalid={errors.passwordConfirm ? true : false}
            className="p-2 my-2 text-black"
          />
          {errors.passwordConfirm && (
            <div role="alert">{errors.passwordConfirm}</div>
          )}
        </label>

        <button
          type="submit"
          className=" p-2 m-2 text-black w-[150px] bg-[var(--main-color)]"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
