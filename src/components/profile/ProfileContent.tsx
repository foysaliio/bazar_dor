"use client";

import { Mail, Save, UserRound } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

interface ProfileContentProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

const ProfileContent = ({ user }: ProfileContentProps) => {
  const router = useRouter();

  const { refetch } = authClient.useSession();

  const [name, setName] = useState(user.name);
  const [isUpdating, setIsUpdating] = useState(false);

  const firstLetter = user.name.trim().charAt(0).toUpperCase() || "U";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }

    if (trimmedName === user.name) {
      toast("নামে কোনো পরিবর্তন করা হয়নি");
      return;
    }

    setIsUpdating(true);

    const { error } = await authClient.updateUser({
      name: trimmedName,
    });

    if (error) {
      setIsUpdating(false);

      toast.error(error.message || "প্রোফাইল আপডেট করা যায়নি");

      return;
    }

    await refetch();

    setIsUpdating(false);

    toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে");

    router.refresh();
  };

  return (
    <div className="mx-auto w-full max-w-[520px]">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-bazar-text">আমার প্রোফাইল</h1>

        <p className="mt-1.5 text-sm text-bazar-muted">
          আপনার ব্যক্তিগত তথ্য দেখুন ও আপডেট করুন
        </p>
      </div>

      {/* Profile Card */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-bazar-border bg-bazar-surface shadow-sm">
        {/* Profile Header */}
        <div className="flex flex-col items-center border-b border-bazar-border px-6 py-7">
          <div className="grid size-20 place-items-center overflow-hidden rounded-full bg-bazar-primary">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                width={80}
                height={80}
                className="size-20 rounded-full object-cover"
              />
            ) : (
              <span className="translate-y-px text-2xl leading-none font-bold text-white">
                {firstLetter}
              </span>
            )}
          </div>

          <h2 className="mt-3 text-lg font-semibold text-bazar-text">
            {user.name}
          </h2>

          <p className="mt-1 text-sm text-bazar-muted">{user.email}</p>
        </div>

        {/* Update Form */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-bazar-text"
            >
              নাম
            </label>

            <div className="relative">
              <UserRound
                size={17}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-bazar-muted"
              />

              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="h-11 w-full rounded-lg border border-bazar-border bg-white pr-3 pl-10 text-sm text-bazar-text outline-none transition-colors duration-300 focus:border-bazar-primary"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-bazar-text"
            >
              ইমেইল
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute top-1/2 left-3 -translate-y-1/2 text-bazar-muted"
              />

              <input
                id="email"
                type="email"
                value={user.email}
                readOnly
                className="h-11 w-full cursor-not-allowed rounded-lg border border-bazar-border bg-bazar-bg pr-3 pl-10 text-sm text-bazar-muted outline-none"
              />
            </div>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            disabled={isUpdating}
            className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-bazar-primary text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-bazar-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save size={17} />

            {isUpdating ? "আপডেট হচ্ছে..." : "প্রোফাইল আপডেট করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileContent;
