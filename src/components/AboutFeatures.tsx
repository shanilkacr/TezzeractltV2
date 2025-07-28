import AboutFeatureCard from "./AboutFeatureCard";
import TezImage from "../assets/images/tezzeractofficial_logo.jpeg";

export default function AbouutFeatures() {
    return(
    <section className="container mx-auto">
        <div className="mt-12 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   <AboutFeatureCard title="Industries on" description="sfownfjsdngfdsjongsdjf"></AboutFeatureCard>
   <div>
    <div className="">
<img src={TezImage} alt="Tezzeract Logo" />
    </div>
   </div>
    <AboutFeatureCard title="dsfdsfsfs" description="sfownfjsdng23r32rfdsjongsdjf"></AboutFeatureCard>
   <AboutFeatureCard title="dsfqw3r32r3" description="23rfsafafaadf"></AboutFeatureCard>
   <AboutFeatureCard title="dsfqw3r32r3" description="23rfsafafaadf"></AboutFeatureCard>

            <div></div>
            <div></div>
        </div>

    </section>
    
    )
}