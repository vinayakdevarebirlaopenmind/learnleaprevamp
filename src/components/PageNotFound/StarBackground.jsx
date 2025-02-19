import { useEffect, useState } from "react";

const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const createStar = () => {
            const newStar = {
                id: Date.now(),
                right: 0,
                top: Math.random() * window.innerHeight,
            };

            setStars(prevStars => [...prevStars, newStar]);

            setTimeout(() => {
                setStars(prevStars => prevStars.filter(star => star.id !== newStar.id));
            }, 5000); // Remove star after 5 seconds
        };

        const interval = setInterval(createStar, 100);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute w-2 h-2 bg-white rounded-full animate-moveStar"
                    style={{ top: `${star.top}px`, right: `${star.right}px` }}
                />
            ))}
        </div>
    );
};

export default StarBackground;
