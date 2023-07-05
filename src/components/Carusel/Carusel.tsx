import { useEffect, useState } from "react";

export default function Carousel() {
    const carouselData = ["1", "2", "3", "4"];

    const [currentIndex, setCurrentIndex] = useState<number>(0);


    const carouselInfiniteScroll = () => {
        if (currentIndex === carouselData.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    };

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll(), 3000 });

        return ( ) => clearInterval(interval)
    }, []);
    return (
        <section className="showcase">

        </section>
    )
}