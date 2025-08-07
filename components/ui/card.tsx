import { PropsWithChildren, HTMLAttributes } from "react";
export function Card({ className = "", children, ...props }: PropsWithChildren<HTMLDivElement & HTMLAttributes<HTMLDivElement>>) {
  return <div {...props} className={`rounded-xl border ${className}`} >{children}</div>;
}
export function CardContent({ className = "", children, ...props }: PropsWithChildren<HTMLDivElement & HTMLAttributes<HTMLDivElement>>) {
  return <div {...props} className={`p-4 ${className}`}>{children}</div>;
}
