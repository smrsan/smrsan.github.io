import { useEffect, useState } from "react";
import trainVideo from "/videos/train.mp4";
import trainHorizontalVideo from "/videos/train-h.mp4";

const BgTrainVideo = () => {
    const [trainVideoSrc, setTrainVideoSrc] = useState(
        window.innerWidth > window.innerHeight
            ? trainVideo
            : trainHorizontalVideo
    );

    useEffect(() => {
        function justifyVideoSrc() {
            setTrainVideoSrc(
                window.innerWidth > window.innerHeight
                    ? trainVideo
                    : trainHorizontalVideo
            );
        }

        window.addEventListener("resize", justifyVideoSrc);

        return () => {
            window.removeEventListener("resize", justifyVideoSrc);
        };
    }, []);

    return (
        <div
            className="
                sticky
                screen-fit-size
                top-0
                flex
                justify-center
                items-center
                place-content-center
                content-center
                -z-10
            "
        >
            <video
                key={trainVideoSrc}
                autoPlay
                muted
                loop
                className="
                        relative
                        w-full
                        h-full
                    "
            >
                <source src={trainVideoSrc} type="video/mp4" />
            </video>
        </div>
    );
};

export default BgTrainVideo;
