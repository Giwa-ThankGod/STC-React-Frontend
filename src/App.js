import React from "react";
import {
    BrowserRouter as Router, 
    Route, Routes
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import QuestionList from "./pages/questionList";
import ArticleList from "./pages/articleList";
import Navbar from "./components/ui/navbar"

export default function App() {
    return (
        <Router>
            <Navbar user='' />
            <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/questions" Component={QuestionList} />
                <Route path="/articles" Component={ArticleList} />
                <Route path="/login" Component={Login} />
            </Routes>
        </Router>
    )
}