import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Albums from "../common/Albums";
import Modal from "../common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootStateType } from "../store";
import { getUsers } from "../store/apiActions";

const Users: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const users = useAppSelector(
    (state: RootStateType) => state.usersSlice.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <strong>{user.id}.</strong> {user.name}{" "}
            <span style={{ fontSize: "10px" }}>{user.email}</span>
          </div>
        ))}
      </div>
      <button>
        <NavLink
          to="/posts"
          style={{
            color: "#000",
            textDecorationLine: "none",
          }}
        >
          Posts
        </NavLink>
      </button>
      <button
        onClick={() => setActive(true)}
        style={{ margin: "20px", cursor: "pointer" }}
      >
        Albums
      </button>

      <Modal active={active} setActive={setActive}>
        {active && <Albums setActive={setActive} />}
      </Modal>
    </div>
  );
};

export default Users;
