import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const Index = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({
    mobileError: {
      bool: false,
      message: "",
    },
    nameError: {
      bool: false,
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleFormInputChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    setLoading(true);
  };

  return (
    <main className="flex flex-col min-h-[90vh] justify-center items-center">
      <form
        onSubmit={submitForm}
        className="flex flex-col h-full w-[90%] max-w-xs justify-center items-center shadow-lg rounded-lg p-4"
      >
        <Input
          isClearable
          className="my-2"
          label="Mobile"
          name="mobile"
          onChange={handleFormInputChange}
          errorMessage={error.mobileError.message}
          isInvalid={error.mobileError.bool}
          inputMode="tel"
        />
        <p className="py-2">or</p>
        <Input
          isClearable
          className="my-2"
          label="Name"
          name="name"
          onChange={handleFormInputChange}
          errorMessage={error.nameError.message}
          isInvalid={error.nameError.bool}
        />
        <Button
          type="submit"
          className="w-full mt-2"
          color="primary"
          variant="shadow"
          isLoading={loading}
          inputMode="tel"
        >
          Check In
        </Button>
      </form>
    </main>
  );
};

export default Index;
