"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

const SignInPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "ইমেইল অথবা পাসওয়ার্ড সঠিক নয়");
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");

    router.push("/");
    router.refresh();
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleGitHubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <main className="flex min-h-[calc(100dvh-149px)] bg-bazar-bg px-4 py-8">
      <Toaster position="top-center" />

      <div className="mx-auto w-full max-w-[440px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bazar-text">সাইন ইন করুন</h1>

          <p className="mt-1.5 text-sm text-bazar-muted">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-5 rounded-2xl border border-bazar-border bg-bazar-surface p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-bazar-text"
              >
                ইমেইল
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="h-10 w-full rounded-lg border border-bazar-border bg-white px-3 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-bazar-text"
              >
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="আপনার পাসওয়ার্ড"
                  required
                  className="h-10 w-full rounded-lg border border-bazar-border bg-white px-3 pr-10 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-bazar-muted transition-colors duration-300 hover:text-bazar-primary"
                  aria-label="পাসওয়ার্ড দেখুন"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex h-10 w-full items-center justify-center rounded-lg bg-bazar-primary text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
            </button>
          </form>

          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-bazar-border" />

            <span className="text-xs text-bazar-muted">অথবা</span>

            <div className="h-px flex-1 bg-bazar-border" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-10 items-center justify-center gap-2 rounded-lg border border-bazar-border bg-white text-xs font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary hover:bg-bazar-soft hover:shadow-sm cursor-pointer"
            >
              <FcGoogle size={18} />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGitHubSignIn}
              className="flex h-10 items-center justify-center gap-2 rounded-lg border border-bazar-border bg-white text-xs font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary hover:bg-bazar-soft hover:shadow-sm cursor-pointer"
            >
              <FaGithub size={18} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-bazar-muted">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-bazar-primary transition-colors duration-300 hover:text-bazar-primary-hover"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-lg border border-bazar-border bg-bazar-surface px-4 text-xs font-medium text-bazar-muted shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-bazar-primary hover:bg-bazar-soft hover:text-bazar-primary hover:shadow-md"
          >
            <ArrowLeft size={14} />
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
