import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  firstname: z.string().min(3, { message: "firstname is too short" }),
  lastname: z.string().min(3, { message: "lastname is too short" }),
  email: z.string().email({ message: "input shold be an email" }),
  username: z.string().min(4, { message: "username is too short" }),
  password: z.string().min(8, { message: "password is too short" }),
});

type FormData = z.infer<typeof schema>;

interface userInformation {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
}

interface Props {
  setSignupInformation: (value: userInformation) => void;
}

const SignUp = ({ setSignupInformation }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FieldValues) => {
    const loginInformation = {
      id: Date.now(),
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      username: data.username,
      password: data.password,
    };
    setSignupInformation(loginInformation);
    reset();
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <label htmlFor="firstname">firstname</label>
      <input
        autoFocus
        type="text"
        placeholder="firstname"
        id="firstname"
        {...register("firstname")}
      />
      {errors.firstname && <span>*{errors.firstname.message}</span>}
      <label htmlFor="lastname">username</label>
      <input
        type="text"
        placeholder="username"
        id="lastname"
        {...register("lastname")}
      />
      {errors.lastname && <span>*{errors.lastname.message}</span>}
      <label htmlFor="email">email</label>
      <input
        type="text"
        placeholder="email"
        id="email"
        {...register("email")}
      />
      {errors.email && <span>*{errors.email.message}</span>}
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="username"
        id="username"
        {...register("username")}
      />
      {errors.username && <span>*{errors.username.message}</span>}
      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        {...register("password")}
      />
      {errors.password && <span>*{errors.password.message}</span>}
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUp;
