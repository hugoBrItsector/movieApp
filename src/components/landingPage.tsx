import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { VideoListPage } from "./videoListPage";
import { AddVideo } from "./addVideo";
import { VideoState } from "../store/types";
import { useDispatch } from "react-redux";
import { store } from "../store/store";
import { addMovie, deleteMovie } from "../store/actions/videoActions";

export const LandingPage = () => {
  const [activeLandingPage, setActiveLandingPage] = useState(false);
  const [activeAddVideoPage, setActiveAddVideoPage] = useState(false);
  const dispatch = useDispatch();
  const state = store.getState().videos;

  const handlesetActiveLandingPageOrNot = (status: boolean) => {
    setActiveLandingPage(status);
  };

  const handleOpenAddVideo = (status: boolean) => {
    setActiveAddVideoPage(status);
  };

  const handleAddVideoStore = (videoName: string, videoLink: string) => {
    const newVideo: VideoState = {
      id: state.length > 0 ? Math.max(...state.map((t) => t.id + 1)) : 1,
      name: videoName,
      link: videoLink,
      viewed: false,
    };
    dispatch(addMovie(newVideo));
  };

  const handleDeleteVideoStore = (movieId: number) => {
    dispatch(deleteMovie(movieId));
  };

  return (
    <>
      {activeLandingPage ? (
        <header>
          <h1>Videos</h1>
          <div>
            <Button
              className="secondary"
              onClick={() => handleOpenAddVideo(true)}
            >
              Add Movie!
            </Button>
          </div>
          {activeAddVideoPage ? (
            <>
              <AddVideo
                showModal={activeAddVideoPage}
                closeModal={() => setActiveAddVideoPage(false)}
                handleAddVideoStore={handleAddVideoStore}
              />
              <VideoListPage handleDeleteVideoStore={handleDeleteVideoStore} />
            </>
          ) : (
            <VideoListPage handleDeleteVideoStore={handleDeleteVideoStore} />
          )}
        </header>
      ) : (
        <>
          <h1>Video App</h1>
          <Button
            variant="outline-secondary"
            onClick={() => handlesetActiveLandingPageOrNot(true)}
          >
            Let's watch!
          </Button>
        </>
      )}
    </>
  );
};
