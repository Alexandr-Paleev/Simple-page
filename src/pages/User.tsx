import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootStateType } from "../store";
import { getPosts } from "../store/apiActions";

const User: React.FC = (): JSX.Element => {
  const {id} = useParams()
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
      <h2>User posts</h2>
      <div>
        {posts.filter(post => post.userId === Number(id)).map((post) => (
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

export default User;
