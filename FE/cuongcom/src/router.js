import { Component } from "react";
import { ROUTERS } from "./utils/router";
import HomePage from "./pages/users/homePage";
import { Routes , Route } from "react-router-dom";
import Masterlayout from "./pages/users/theme/masterlayout";
import ProfilePage from "./pages/users/profilePage";

const renderUserRouter = () => {
        const userRouters = [
            {
                path: ROUTERS.USER.HOME ,
                Component : <HomePage />

            },
            {
                path: ROUTERS.USER.PROFILE ,
                Component : <ProfilePage />
            },
        ]
        return (
            <Masterlayout>
            <Routes> 
                {
                    userRouters.map((item , key ) => (
                        < Route key = {key} path = {item.path} element = {item.Component} />
                    ))
                }
            </Routes>
            </Masterlayout>
        )
} ;

const RouterCustom = () => {
    return renderUserRouter() ;
} ;
export default RouterCustom ;