import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

const schema = z.object({
  username: z.string().min(3, { message: "username is too short" }),
  password: z.string().min(8, { message: "password is too short" }),
});

type FormData = z.infer<typeof schema>;

interface userInformation {
  id: number;
  username: string;
  password: string;
}

interface Props {
  setLoginInformation: (value: userInformation) => void;
}

const Login = ({ setLoginInformation }: Props) => {
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
      username: data.username,
      password: data.password,
    };
    setLoginInformation(loginInformation);
    reset();
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <label htmlFor="username">username</label>
      <input
        autoFocus
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
      <button type="submit">Log in</button>
    </form>
  );
};

export default Login;
