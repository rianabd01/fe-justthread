import React from "react";
// eslint-disable-next-line object-curly-newline
import { GoHome, GoPerson, GoSignIn, GoSignOut } from "react-icons/go";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { asyncUnsetAuthUser } from "../../states/authUser/action";

export default function Navigation() {
  const { authUser = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  const router = useRouter();
  const signOut = () => {
    dispatch(asyncUnsetAuthUser());
    router.push("/");
  };

  return (
    <nav className="navigation container">
      <ul>
        <li>
          <Link href="/" className="navigation_link">
            <GoHome className="navigation_icon" />
            <span className="navigation_link_text">Home</span>
          </Link>
        </li>
        {authUser ? (
          <li>
            <button type="button" onClick={signOut} className="navigation_link">
              <GoSignOut className="navigation_icon" />
              <span className="navigation_link_text">Sign out</span>
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link href="/login" className="navigation_link">
                <GoSignIn className="navigation_icon" />
                <span className="navigation_link_text">Sign in</span>
              </Link>
            </li>
            <li>
              <Link href="/register" className="navigation_link">
                <GoPerson className="navigation_icon" />
                <span className="navigation_link_text">Register</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};
