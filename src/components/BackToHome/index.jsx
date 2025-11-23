import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import "./index.css";

export default function BackToHome() {
  return (
    <Link href="/" className="back-to-home">
      <GoArrowLeft />
    </Link>
  );
}
