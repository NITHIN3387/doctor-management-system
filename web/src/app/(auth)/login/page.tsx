import { LoginForm } from "@/components/forms/login-form";
import Link from "next/link";

const Page = (): JSX.Element => {
  return (
    <div className="w-96 space-y-8">
      <header>
        <h1 className="font-semibold tracking-tight text-2xl">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </header>
      <LoginForm />
      <p className="text-center text-sm">
        Don't have an account?{" "}
        <Link className="text-primary font-semibold" href="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Page;
