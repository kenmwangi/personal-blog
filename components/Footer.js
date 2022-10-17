import metadata from "@/data/metadata";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-60">
      <p className="text-sm text-slate-500">
        &copy; {metadata.author}, {new Date().getFullYear()}. All rights rserved
      </p>
    </div>
  );
}
