import React from "react";
import { poppins } from "@/app/fonts";
import home from "./home.module.css";

const NeedHelp: React.FC = () => {
    return (

        <div className="w-full">
            <div>
                <h1 className="text-4xl font-bold pt-4 md:pt-8 pb-8">NEED SOME HELP?</h1>
            </div>

            <div className="flex flex-cols font-bold">
                <h2 className={`font-bold text-xl ${home["text-maroon"]}`}>
                    TOPICS COVERED:
                </h2>
                
                <p className={`text-xl ${home["text-maroon"]}`}>
                    PYTHON BASICS<br />
                    VARIABLES<br />
                    CONTROL STRUCTURES<br />
                    LOOPS<br />
                    STATISTICS<br />
                    ETHICS<br />
                    PARTICLE STATICS<br />
                    COLLISIONS<br />
                    RIGID BODIES<br />
                    ANGULAR MOMENTUM<br />
                    HARMONIC MOTION<br />
                    AND MORE!
                </p>
            </div>
            
        </div>



    );
};

export default NeedHelp;