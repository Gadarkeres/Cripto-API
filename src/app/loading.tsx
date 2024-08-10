"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ClipLoader color="#25c543" />
    </div>
  );
}
