import React from "react";
import NotFound from "../pages/not-found";
import HomePage from "../pages/index";
import Layout from "../components/layout";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/auth";
import WallPage from "../pages/wall";
import FavoritesList from "../pages/favorites";
import Profile from "../pages/profile";
import EditProfile from "../pages/profile/edit";
import MessagePage from "../pages/message";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/wall" element={<WallPage />}></Route>
        <Route path="/favorites-list" element={<FavoritesList />}></Route>
        <Route path="/messages" element={<MessagePage />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile/edit" element={<EditProfile />}></Route>
        </Route>
      </Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default Router;
