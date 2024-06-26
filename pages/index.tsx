export default function Home() {
  return (
    <div className="text-6xl flex justify-center items-center flex-col min-h-[80vh] ">
      <h2 className="">JSON Placeholder API</h2>
      <ul className="text-2xl flex m-2 ">
        <li className="mx-6 list-disc	">Posts</li>
        <li className="mx-6 list-disc	">Comments</li>
        <li className="mx-6 list-disc	">Users</li>
      </ul>
    </div>
  );
}
