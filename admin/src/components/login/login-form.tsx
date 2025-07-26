import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import LoginHeader from "@/components/login/login-header";
import LoginContent from "@/components/login/login-content";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <LoginHeader />
        <LoginContent />
      </Card>
    </div>
  );
}
