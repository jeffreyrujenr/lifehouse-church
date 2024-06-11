import clientPromise from "@/lib/mongoDB";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

interface User {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  age: number | string;
  ageGroup?: string;
  maritalStatus?: string;
}

const Index = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default Index;
