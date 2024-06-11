import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <Button
        className="my-2 w-32"
        color="primary"
        variant="shadow"
        onClick={() => router.push("/registerUser")}
      >
        Register User
      </Button>
      <Button
        className="my-2 w-32"
        color="default"
        variant="shadow"
        onClick={() => router.push("/checkinUser")}
      >
        Check-in User
      </Button>
      <Button
        className="my-2 w-32"
        color="default"
        variant="flat"
        onClick={() => router.push("/users")}
      >
        Users Table
      </Button>
    </main>
  );
}
