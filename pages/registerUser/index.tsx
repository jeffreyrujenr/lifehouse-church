import {
  Button,
  DateInput,
  DateValue,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";

type User = {
  fullname: string;
  mobile: string;
  email: string;
  gender: string;
  dateOfBirth: DateValue;
};

type UserError = {
  fullnameError: string;
  mobileError: string;
  emailError: string;
  genderError: string;
  dateOfBirthError: string;
};

const Index = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState({
    fullnameError: {
      bool: false,
      message: "",
    },
    mobileError: {
      bool: false,
      message: "",
    },
    emailError: {
      bool: false,
      message: "",
    },
    genderError: {
      bool: false,
      message: "",
    },
    dateOfBirthError: {
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
        className="flex flex-col h-full w-[90%] max-w-xs justify-center items-center shadow-lg rounded-lg p-4"
        onSubmit={submitForm}
      >
        <Input
          isRequired
          isClearable
          className="my-2"
          label="Full name"
          name="fullname"
          onChange={handleFormInputChange}
          errorMessage={error.fullnameError.message}
          isInvalid={error.fullnameError.bool}
          inputMode="text"
        />
        <Input
          isRequired
          isClearable
          className="my-2"
          label="Mobile"
          name="mobile"
          onChange={handleFormInputChange}
          errorMessage={error.fullnameError.message}
          isInvalid={error.fullnameError.bool}
          inputMode="tel"
        />
        <Input
          isRequired
          isClearable
          className="my-2"
          label="Email"
          name="email"
          onChange={handleFormInputChange}
          errorMessage={error.fullnameError.message}
          isInvalid={error.fullnameError.bool}
          inputMode="email"
        />
        <Select
          isRequired
          className="my-2"
          label="Gender"
          name="gender"
          onChange={handleFormInputChange}
          errorMessage={error.fullnameError.message}
          isInvalid={error.fullnameError.bool}
        >
          <SelectItem key="male">Male</SelectItem>
          <SelectItem key="female">Female</SelectItem>
        </Select>
        <DateInput
          isRequired
          className="my-2"
          label="Date of Birth"
          name="dateOfBirth"
          onChange={handleFormInputChange}
          errorMessage={error.fullnameError.message}
          isInvalid={error.fullnameError.bool}
        />
        <Button
          type="submit"
          className="w-full mt-2"
          color="primary"
          variant="shadow"
          isLoading={loading}
        >
          Register
        </Button>
      </form>
    </main>
  );
};

export default Index;
