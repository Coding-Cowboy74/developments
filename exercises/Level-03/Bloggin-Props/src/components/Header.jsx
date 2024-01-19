import React from "react";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="top-header">
            <Navbar />
            <h1>Clean Blog</h1>
            <span>A Blog Theme by Start Bootstrap</span>
        </div>
    )
}