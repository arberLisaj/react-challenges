import { useState } from "react";
import usePosts from "./usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  const { data: posts, isLoading } = usePosts({ page, pageSize });

  return (
    <main>
      <button disabled={page === 1} onClick={() => setPage((v) => v - 1)}>
        Previous
      </button>
      <button disabled={page === 5} onClick={() => setPage((v) => v + 1)}>
        Next page
      </button>
      {isLoading && <p>Loading...</p>}
      <ul>
        {posts?.map((post) => (
          <li className="card" key={post.id}>
            <span>@janedoe</span>
            <hr />
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostList;
