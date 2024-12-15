import { SignupForm } from "@/components/forms/signup-form";
import Link from "next/link";

const Page = (): JSX.Element => {
  return (
    <div className="w-96 space-y-8 px-6">
      <header>
        <h1 className="font-semibold tracking-tight text-2xl">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
      </header>
      <SignupForm />
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link className="text-primary font-semibold" href="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Page;
