import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootStateType } from "../store";
import { getPosts } from "../store/apiActions";

const Posts: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(
    (state: RootStateType) => state.postsSlice.posts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        Back
      </button>
      <h2>Posts</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id} style={{ margin: "10px 0" }}>
            <strong>{post.title}.</strong>
            <br />
            <span>{post.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
