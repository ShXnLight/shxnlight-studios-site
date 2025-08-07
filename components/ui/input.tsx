import { InputHTMLAttributes } from "react";
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2 ${props.className||""}`} />;
}
