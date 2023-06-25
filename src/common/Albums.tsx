import React, { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootStateType } from "../store";
import { getAlbums } from "../store/apiActions";

interface IAlbums {
  setActive: (value: boolean) => void;
}

const Albums: React.FC<IAlbums> = (props): JSX.Element => {
  const { setActive } = props;
  const dispatch = useAppDispatch();
  const albums = useAppSelector(
    (state: RootStateType) => state.albumsSlice.albums
  );

  useEffect(() => {
    dispatch(getAlbums());
  }, []);

  return (
    <>
      <h3 style={{ margin: "16px" }}>Albums</h3>
      <Scrollbars
        autoHide
        autoHeight={true}
        autoHeightMin="calc(100vh - 300px)"
        autoHeightMax="calc(100vh - 300px)"
      >
        <ul>
          {albums.map((album) => (
            <li key={album.id} style={{ padding: "5px 10px", width: "300px" }}>
              <em>{album.title}</em>
            </li>
          ))}
        </ul>
      </Scrollbars>
      <button
        onClick={() => setActive(false)}
        style={{ margin: "20px", cursor: "pointer" }}
      >
        Close
      </button>
    </>
  );
};

export default Albums;
