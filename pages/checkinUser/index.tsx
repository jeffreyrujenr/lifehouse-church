import { Button, Input } from "@nextui-org/react";

const index = () => {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <form
        action=""
        className="flex flex-col h-full justify-center items-center"
      >
        <Input
          isClearable
          startContent={<p>+91</p>}
          className="w-full"
          type="text"
          label="Mobile"
          placeholder="9876543210"
          description="Enter WhatsApp mobile number"
        />
        <p className="py-2">or</p>
        <Input
          isClearable
          className="w-full"
          type="text"
          label="Name"
          placeholder="Jesus Christ"
          description="Enter full name in sentence case"
        />
        <Button className="my-4 w-full" color="primary" variant="shadow">
          Check In
        </Button>
      </form>
    </main>
  );
};

export default index;
