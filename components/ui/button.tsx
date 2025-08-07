import { ButtonHTMLAttributes, PropsWithChildren } from "react";
export function Button({ className = "", children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-lg transition border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 ${className}`}
    >
      {children}
    </button>
  );
}
