import clientPromise from "../../lib/mongoDB";
import { GetStaticProps } from "next";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
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

interface Users {
  users: User[];
}

export const getStaticProps: GetStaticProps<Users> = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const users = await db
      .collection("users")
      .find({})
      .sort({ name: 1 })
      .toArray();

    return {
      props: { users: JSON.parse(JSON.stringify(users)) },
    };
  } catch (e) {
    console.error(e);

    return {
      props: { users: [] },
    };
  }
};

const Index = ({ users }: Users) => {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center min-h-[90vh] p-4">
      <Table
        aria-label="Users table"
        onRowAction={(key) => router.push(`/users/${key}`)}
        className="shadow-lg"
      >
        <TableHeader>
          <TableColumn key="name">Name</TableColumn>
          <TableColumn key="mobile">Mobile</TableColumn>
          <TableColumn key="email">Email</TableColumn>
          <TableColumn key="gender">Gender</TableColumn>
          <TableColumn key="dateOfBirth">Date of Birth</TableColumn>
          <TableColumn key="age">Age</TableColumn>
        </TableHeader>
        <TableBody items={users} emptyContent={"No data to display!"}>
          {(item: User) => (
            <TableRow key={item._id}>
              <TableCell>{item.name.toLowerCase()}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{new Date(item.dateOfBirth).toDateString()}</TableCell>
              <TableCell>
                {typeof item.age === "number"
                  ? item.age
                  : item.age.split("years")}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  );
};

export default Index;
