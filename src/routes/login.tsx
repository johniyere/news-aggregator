import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center w-72">
        <h1 className="font-display text-3xl mb-6">Login or Sign up</h1>
        <Button className="mb-6 w-full" target="_blank" color="white">
          CONTINUE WITH GOOGLE
        </Button>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
          <div className="flex flex-col gap-2 mb-4">
            <Label className="text-sm" htmlFor="loginEmail">
              Email
            </Label>
            <Input
              type="email"
              id="loginEmail"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email?.type === "email" && (
              <span className="text-sm">This email is invalid</span>
            )}
            {errors.email?.type === "required" && (
              <span className="text-sm">This email is Required</span>
            )}
          </div>

          <Button
            className="mb-6 w-full"
            target="_blank"
            color="ultramarine"
            type="submit"
          >
            SIGN IN
          </Button>
        </form>
      </div>
    </div>
  );
}
