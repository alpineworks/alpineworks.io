"use client";
import { redirect } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

export default function VanityPage({
  repoName,
  redirectSeconds = 5,
}: {
  repoName: string;
  redirectSeconds?: number;
}) {
  const timeoutTime = redirectSeconds;

  const [, startTransition] = useTransition();
  const [timeRemaining, setTimeRemaining] = useState<number>(timeoutTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      startTransition(() => {
        redirect(`https://pkg.go.dev/alpineworks/${repoName}`);
      });
    }, timeoutTime * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [repoName, startTransition, timeoutTime]);

  return (
    <div>
      <div className="-z-10 absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#86b3ff33_1px,transparent_1px),linear-gradient(to_bottom,#86b3ff33_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="flex flex-col h-screen justify-center items-center text-[#2b64c7]">
        <div className="text-6xl text-center pb-4">{repoName}</div>
        <div className="text-2xl font-mono text-[#1a3d7e]">
          redirecting to go.dev in {timeRemaining} seconds
        </div>
      </div>
    </div>
  );
}
