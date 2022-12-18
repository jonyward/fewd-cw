import React from "react";

// Home page component, simple greetings message as this is the root destinatio of the application, and the first thing the user sees

const Home = () => {
    return (
        <>
            <h1 class="homeheading">GCU Recipes</h1>
            <h2 class="homesubheading">Welcome to GCU Recipes!</h2>
            <p class="homeP">Feel free to interact with this React web application for showcasing our delicious homemade recipies!</p>
            <p class="homeP">Please look toward the navigation bar at the top of the site to see our recipes!</p>
        </>
    );
}

export default Home;