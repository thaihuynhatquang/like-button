import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

test("renders like button with class like-button", () => {
  render(<App />);
  const likeButton = screen.getByText("Like | 100");
  expect(likeButton).toHaveClass("like-button");
  expect(likeButton).toBeInTheDocument();
});

test("like button has class liked when user click", async () => {
  render(<App />);
  const likeButton = screen.getByText("Like | 100");
  await waitFor(() => {
    likeButton.click();
  });
  expect(likeButton).toHaveClass("liked");
  expect(likeButton.textContent).toBe("Like | 101");
});

test("like button has not class liked when user click again", async () => {
  render(<App />);
  const likeButton = screen.getByText("Like | 100");
  await waitFor(() => {
    likeButton.click();
  });
  expect(likeButton).toHaveClass("liked");

  await waitFor(() => {
    likeButton.click();
  });
  expect(likeButton).not.toHaveClass("liked");
});
