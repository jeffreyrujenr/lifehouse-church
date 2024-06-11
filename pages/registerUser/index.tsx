import {
  Button,
  DateInput,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

const index = () => {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-xl my-2">New user registration</h1>
      <form
        className="flex flex-col h-full w-[80%] max-w-xs mx-auto justify-center items-center border-1 rounded-xl py-2 px-4 border-gray-900"
        action=""
      >
        <Input className="my-2" label="Full name" />
        <Input className="my-2" label="Mobile" />
        <Input className="my-2" label="Email" />
        <Select className="my-2" label="Gender">
          <SelectItem>Male</SelectItem>
          <SelectItem>Female</SelectItem>
        </Select>
        <DateInput className="my-2" label="Date of Birth" />
        <Button className="w-full my-2" color="primary" variant="shadow">
          Register
        </Button>
      </form>
    </main>
  );
};

export default index;
