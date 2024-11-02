import { Canvas } from "@react-three/fiber";
import { TrainModel } from "./TrainModel";

const BgTrainModel = ({ scrollProgressRef }) => {
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
                bg-color-1/20
            "
        >
            <Canvas>
                <TrainModel {...{ scrollProgressRef }} />
            </Canvas>
        </div>
    );
};

export default BgTrainModel;
