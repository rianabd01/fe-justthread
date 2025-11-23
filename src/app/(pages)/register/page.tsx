"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../../../states/users/action";
import Register from "../../../components/Register";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    router.push("/login");
  };
  return (
    <section className="login-wrap">
      <Register register={onRegister} />
    </section>
  );
}
