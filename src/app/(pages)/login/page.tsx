"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Login from "../../../components/Login";
import { asyncSetAuthUser } from "../../../states/authUser/action";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    router.push("/");
  };
  return (
    <section className="login-wrap">
      <Login login={onLogin} />
    </section>
  );
}
