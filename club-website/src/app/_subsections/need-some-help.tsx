import React from "react";
import { poppins } from "@/app/fonts";
import home from "./home.module.css";

const NeedHelp: React.FC = () => {
    return (

        <div >
            <h1 className={`font-bold text-5xl`} style={poppins.style}>
                NEED SOME HELP?
            </h1>

            <div className="flex flex-col font-bold">
                <h2 className={`font-bold text-5xl ${home["text-maroon"]}`}>
                    TOPICS COVERED:
                </h2>
                <h2 className={home["text-maroon"]}>
                    PYTHON BASICS
                    VARIABLES
                    CONTROL STRUCTURES
                    LOOPS
                    STATISTICS
                    ETHICS
                    PARTICLE STATICS
                    COLLISIONS
                    RIGID BODIES
                    ANGULAR MOMENTUM
                    HARMONIC MOTION
                    AND MORE!
                </h2>
            </div>
            
        /</div>



    );
};

export default NeedHelp;