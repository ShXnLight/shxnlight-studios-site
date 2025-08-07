import { TextareaHTMLAttributes } from "react";
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`w-full rounded-lg border border-zinc-800 bg-zinc-950 p-2 min-h-[120px] ${props.className||""}`} />;
}
