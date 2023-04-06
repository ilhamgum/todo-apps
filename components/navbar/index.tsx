import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="px-10 py-5 flex items-center justify-between ">
      <Link href={"/"}>
        <button>Todo</button>
      </Link>

      {/* if no session */}
      {!session && (
        <button onClick={() => signIn()} className="px-2 py-1 border">
          Login
        </button>
      )}

      {/* if session loading */}
      {status === "loading" && <div>Authenticating...</div>}

      {/* if session */}
      {session && (
        <div className="flex items-center">
          <Link href={"/drafts"}>
            <button className="mr-6">Drafts</button>
          </Link>

          <Link href={"/completed"}>
            <button className="mr-6">Completed</button>
          </Link>

          <div className="mr-2">{session?.user?.name}</div>

          <Image
            priority
            alt="user"
            width={250}
            height={250}
            src={
              session?.user?.image ||
              `https://ui-avatars.com/api/?name=${session?.user?.name}`
            }
            className="w-8 h-8 rounded-full"
          />

          <button onClick={() => signOut()} className="ml-4 px-2 py-1 border">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
