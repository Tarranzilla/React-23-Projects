import { useState } from "react";

import MainNavbar from "./components/MainNavbar";

function App() {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return (
            <>
                <h1>Loading...</h1>
                <button
                    onClick={() => {
                        setLoading(false);
                    }}
                >
                    Access Website
                </button>
            </>
        );
    }

    return (
        <>
            <MainNavbar />
        </>
    );
}

export default App;
