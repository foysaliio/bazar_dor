import { headers } from "next/headers";
import { redirect } from "next/navigation";

import ProfileContent from "@/components/profile/ProfileContent";
import { auth } from "@/lib/auth";

export const instant = false;

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <main className="min-h-[calc(100dvh-149px)] bg-bazar-bg px-4 py-10">
      <ProfileContent
        user={{
          name: session.user.name,
          email: session.user.email,
          image: session.user.image,
        }}
      />
    </main>
  );
};

export default ProfilePage;
