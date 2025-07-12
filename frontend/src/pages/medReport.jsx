import { useNavigate } from "react-router-dom";

function MedReportPage(){
    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen fixed">
            {/*Nav Bar */}
            <div className="w-screen h-[10vh] absolute top-[0%] flex items-center justify-between pl-10 pr-10">
                <h1 onClick={()=>navigate("/")} className="text-3xl font-bold cursor-pointer">MediLink</h1>
                <div className="w-[25vw] flex justify-evenly items-center ">
                    <p className="text-xl hover:underline cursor-pointer"
                        onClick={()=>navigate("/user/medical-report")}
                    >Past Reports</p>
                   <button className="px-4 py-2 rounded-lg border-3 font-semibold border-blue-500 text-black hover:bg-blue-500 hover:text-white transition cursor-pointer">
                        Login
                    </button>

                    <button className="px-4 py-2   border-3 font-semibold border-blue-500 text-black bg-blue-500 text-white hover:rounded-lg transition cursor-pointer">
                        Signup
                    </button>
                </div>
            </div>
           <div className="relative w-[80vw] h-[80vh] mx-auto overflow-hidden absolute top-[17%]">


                {/* Upload Form */}
                <form action="" className="relative z-10">
                    <input
                    type="file"
                    className="px-4 py-2 cursor-pointer w-[15vw] absolute top-[15%] left-1/2 transform -translate-x-1/2 border-2 border-blue-500 font-semibold text-blue-500 rounded hover:text-white hover:bg-blue-500 transition"
                    />
                </form>

                {/* Content Box */}
                <div className="relative z-10 bg-[aliceblue] w-full h-[60vh] mt-28 flex items-center justify-center rounded-xl shadow-xl">
                    <h1 className="text-gray-500 text-xl">No data available</h1>
                </div>
            </div>


        </div>
    )
}
export default MedReportPage;