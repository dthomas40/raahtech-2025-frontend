import { Link } from "react-router-dom";
import "./NotFoundPage.css";
import TopGap from "../components/TopGap";

export default function NotFoundPage() {
    return (
        <>
            <TopGap />
            <div className="notfound-wrapper">
                <div className="notfound-content">
                    <h1 className="notfound-title">404</h1>
                    <p className="notfound-message">
                        The page you're looking for has vanished into the void.
                    </p>

                    <Link to="/" className="notfound-btn">
                        Return Home
                    </Link>
                </div>
            </div>
        </>

    );
}
