import { AiFillBank } from "react-icons/ai";
import { SiCodesignal } from "react-icons/si";


const WorkProcess = () => {
    return (
        <div className=" bg-base-200  mt-12 p-6 rounded-lg">
            <div className="flex flex-col lg:flex-row-reverse justify-between gap-6 items-center">
                <div className="md:w-1/2">
                    <img
                        src="https://i.ibb.co.com/1RgYBw6/hard-work.jpg"
                        className=" rounded-lg w-full" />
                </div>
                <div className="md:w-1/2 text-center">
                    <h1 className="text-5xl font-bold">Our Works Process</h1>
                    <p className="py-4">
                        A performing arts series unlike any other, Works & Process discount pro captivates with
                        its blend champions and offers unprecedented access.
                    </p>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-lg space-y-3 ">
                            <div className=" space-y-3">
                                <h1 className="text-xl font-bold items-center flex gap-2 justify-center"><AiFillBank /> Supervision</h1>
                                <p className="text-sm">Supervision is the act or function of overseeing involves guiding something or somebody.</p>
                            </div>

                        </div>
                        <div className="bg-white p-6 rounded-lg space-y-3 ">
                            <div className=" space-y-3">
                                <h1 className="text-xl font-bold items-center flex gap-2 justify-center"><SiCodesignal />
                                 Design Process</h1>
                                <p className="text-sm"> The five main steps in the design process are Empathize, Define, <br /> Ideate, Deliver, and Test.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;