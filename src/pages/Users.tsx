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
  const [userId, setUserId] = useState(0);
  const users = useAppSelector(
    (state: RootStateType) => state.usersSlice.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Users</h2>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <div style={{ cursor: "pointer" }}>{user.name}
              <span style={{ fontSize: "10px", padding: "5px" }}>{user.email}</span>
            </div>
            <button>
              <NavLink
                to={`/posts/${user.id}`}
                style={{
                  color: "#000",
                  textDecorationLine: "none",
                }}
              >
                Posts
              </NavLink>
            </button>

            <button
              onClick={() => { setActive(true); setUserId(user.id) }}
              style={{ margin: "10px", cursor: "pointer" }}
            >
              Albums
            </button>
          </li>
        ))}
      </ol>

      <Modal active={active} setActive={setActive}>
        {active && <Albums userId={userId} setActive={setActive} />}
      </Modal>
    </div>
  );
};

export default Users;
