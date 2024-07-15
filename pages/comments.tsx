import { inter } from "../styles/fonts";
import useFetchComments from "../hooks/useFetchComments";

type Comment = {
  id: number;
  body: string;
  name: string;
  email: string;
};
const CommentsPage = () => {
  const { data: comments, isLoading, error } = useFetchComments();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl">Loading comments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-2xl">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div
      className={`${inter.className} flex justify-center items-center flex-col bg-[var(--main-bg-color-default)] text-[var(--main-color)] py-4`}
    >
      <h1 className=" text-2xl py-4 font-bold">Comments</h1>
      <div className="grid gap-4 max-w-[700px] w-calc[100% - 2rem] max-sm:max-w-[325px]">
        {comments.map((comment: Comment) => (
          <div
            key={comment.id}
            className=" text-[.85rem] bg-[var(--main-bg-color)] p-4 border border-[var(--main-border)]"
          >
            <h2 className="font-bold pb-2">{comment.name}</h2>
            <h3 className="font-bold pb-2">{comment.email}</h3>
            <h4>{comment.body}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
