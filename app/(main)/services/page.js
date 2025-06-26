import IndustrySolutions from "@/app/_components/IndustrySolutions";
import { Card } from "@/components/ui/card";
import React from "react";

const Services = () => {
    return (
        <div>
            <IndustrySolutions />

            <div className="lg:px-24 mb-12 mt-8 sm:px-4 px-4">
                <Card className=" py-12 rounded-xl shadow-lg">
                    <div className="container mx-auto px-2 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
                        <div className="mb-6 lg:mb-0">
                            <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed">
                                Need Any Custom <br />
                                Chatbot Solutions? <br />
                            </h2>
                        </div>

                        <div className="mb-6 lg:mb-0  px-4">
                            <h2 className="text-sm font-bold leading-relaxed">
                                Create your own customized AI based chatbots with your desired{" "}
                                <br />
                                features to put customer service on autopilot <br />
                            </h2>
                        </div>

                        <div>
                            <a
                                href="/contact"
                                className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-orange-50 transition duration-300"
                            >
                                Start Free Trial
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Services;
