import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { store, StoreState } from "../store/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface MovieListProps {
  handleDeleteVideoStore: (movieId: number) => void;
}

export const VideoListPage: React.FC<MovieListProps> = ({
  handleDeleteVideoStore,
}) => {
  const movies = useSelector((storeState: StoreState) => storeState.videos);
  const [isViewed, setIsViewed] = useState(false);

  const toggleIsViewed = (status: boolean) => {
    setIsViewed(status);
  };

  return (
    <ListGroup as="ul">
      {movies.map((movie) => {
        return (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">
                <img src={movie.link} width="100" height="100" alt="" />
              </div>
              {movie.name}
            </div>
            <Badge bg="primary" pill>
              {movie.viewed ? "VIEWED" : ""}
            </Badge>
            <Button
              variant="danger"
              onClick={() => handleDeleteVideoStore(movie.id)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
