import React from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

type User = {
  id: number;
  name: string;
  email: string;
};

const UsersList: React.FC = () => {
  const { data: users, isLoading, error, isFetching } = useFetchUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>Error: {error?.message || "An unexpected error occurred."}</div>
    );
  }

  return (
    <div>
      <h1>Users List</h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {users &&
          users.map((user: User) => (
            <div
              key={user.id}
              className=" text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]"
            >
              <h2 className="font-bold pb-2">{user.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UsersList;
