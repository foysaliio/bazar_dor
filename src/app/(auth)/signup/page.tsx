"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি মিলছে না");
      return;
    }

    setIsLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      toast.error(error.message || "অ্যাকাউন্ট তৈরি করা যায়নি");

      return;
    }

    toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে");

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
    <main className="bg-bazar-bg px-4 py-8">
      <div className="mx-auto w-full max-w-[440px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-bazar-text">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1.5 text-sm text-bazar-muted">
            বিনা খরচে সাইন আপ করে সব ফিচার উপভোগ করুন
          </p>
        </div>

        {/* Form Card */}
        <div className="mt-5 rounded-2xl border border-bazar-border bg-bazar-surface p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-bazar-text"
              >
                নাম
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="যেমন: রহিম উদ্দিন"
                required
                className="h-10 w-full rounded-lg border border-bazar-border bg-white px-3 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  minLength={8}
                  required
                  className="h-10 w-full rounded-lg border border-bazar-border bg-white px-3 pr-10 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-bazar-muted transition-colors duration-300 hover:text-bazar-primary"
                  aria-label="পাসওয়ার্ড দেখুন"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-bazar-text"
              >
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  minLength={8}
                  required
                  className="h-10 w-full rounded-lg border border-bazar-border bg-white px-3 pr-10 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-bazar-muted transition-colors duration-300 hover:text-bazar-primary"
                  aria-label="পাসওয়ার্ড নিশ্চিতকরণ দেখুন"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-bazar-primary text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-bazar-border" />

            <span className="text-xs text-bazar-muted">অথবা</span>

            <div className="h-px flex-1 bg-bazar-border" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-bazar-border bg-white text-xs font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary hover:bg-bazar-soft hover:shadow-sm"
            >
              <FcGoogle size={18} />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGitHubSignIn}
              className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg border border-bazar-border bg-white text-xs font-medium text-bazar-text transition-all duration-300 hover:border-bazar-primary hover:bg-bazar-soft hover:shadow-sm"
            >
              <FaGithub size={18} />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign In */}
          <p className="mt-4 text-center text-xs text-bazar-muted">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-bazar-primary transition-colors duration-300 hover:text-bazar-primary-hover"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* Home */}
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

export default SignUpPage;
