// components/ui/card.tsx
import { PropsWithChildren } from "react";

type DivProps = React.ComponentProps<"div"> & { className?: string };

export function Card({ className = "", children, ...props }: PropsWithChildren<DivProps>) {
  return (
    <div {...props} className={`rounded-xl border ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }: PropsWithChildren<DivProps>) {
  return (
    <div {...props} className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
