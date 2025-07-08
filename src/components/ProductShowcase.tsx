"use client";

import appScreen from "../assets/images/app-screen.png";
import { WordRotate } from "./WordRotate";
import { AuroraText } from "./Auratext";

export const ProductShowcase = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto ">
        <div className="flex justify-center flex-col items-center  text-center">
          <div className="text-6xl font-bold text-white text-center mt-10">
            <span>
              Busywork is stealing your team's{" "}
              <WordRotate words={["time.", "money.", "resources."]} />
              <AuroraText>Let's fix that</AuroraText>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
