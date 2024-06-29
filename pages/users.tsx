import React from "react";
import { inter } from "../styles/fonts";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { IoPersonOutline } from "react-icons/io5";
import * as MaterialDesign from "react-icons/md";
import { BiPhone } from "react-icons/bi";

type Address = {
  street: string;
  city: string;
  country: string;

  // This defines an object where keys are strings and values are also strings.
};

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: number;
  address: Address; // Now the User type includes an address property.
};

const UsersList: React.FC = () => {
  const { data: users, isLoading, error } = useFetchUsers();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl">Loading Users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="text-2xl">
          {" "}
          Error: {error?.message || "An unexpected error occurred."}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`${inter.className} flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-2`}
    >
      <h1 className=" text-2xl py-4 font-bold">Users</h1>
      <div className="grid gap-4 max-w-[1280px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {users.map((user: User) => (
          <div
            key={user.id}
            className=" 
            text-[.85rem] bg-[var(--main-bg-color)] p-2 border border-[var(--main-border)] flex justify-center items-center  rounded"
          >
            <div className="w-[75px] h-[75px] rounded-full border  border-[var(--main-border)] flex justify-center items-center m-4 ">
              {user.name.charAt(0)}
            </div>

            <div className="flex flex-col justify-start ">
              <h2 className=" font-bold  flex items-center">
                <IoPersonOutline className="mr-2" />
                {user.name}
                <span className=" text-gray-500 pl-2">@{user.username}</span>
              </h2>
              <h3 className=" flex items-center">
                <MaterialDesign.MdOutlineAlternateEmail className="mr-2" />
                {user.email}
              </h3>
              <h4 className=" flex items-center">
                <BiPhone className="mr-2" />
                {user.phone}
              </h4>
              <h5 className=" flex items-center">
                <MaterialDesign.MdLocationOn className="mr-2" />
                {`${user.address.city}`}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;

