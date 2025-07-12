import homepageImage from "../assets/homePageImage.webp"
import { useNavigate } from "react-router-dom"

function HomePage(){
    const navigate = useNavigate();
    const handleMedReportBtn =()=>{

    }
    return (
        <div className="w-screen h-screen fixed" >
            {/*background Image */}
            <img className="w-screen h-screen" src={homepageImage} alt="" />
            {/*Nav Bar */}
            <div className="w-screen h-[10vh] absolute top-[0%] flex items-center justify-between pl-10 pr-10">
                <h1
                    onClick={()=>navigate("/")}
                className="text-3xl font-bold cursor-pointer">MediLink</h1>
                <div className="w-[25vw] flex justify-evenly items-center ">
                    <p className="text-xl hover:underline cursor-pointer"
                        onClick={()=>navigate("/user/medical-report")}
                    >Past Reports</p>
                   <button 
                    onClick={()=>navigate("/user/login")}
                   className="px-4 py-2 rounded-lg border-3 font-semibold border-blue-500 text-black hover:bg-blue-500 hover:text-white transition cursor-pointer">
                        Login
                    </button>

                    <button
                    onClick={()=>navigate('/user/register')}
                    className="px-4 py-2   border-3 font-semibold border-blue-500 text-black bg-blue-500 text-white hover:rounded-lg transition cursor-pointer">
                        Signup
                    </button>
                </div>
            </div>
            <div className="absolute top-[50%] z-10 w-[80vw] text-black bg-transparent p-6   backdrop-blur-xs">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
                        Smart Healthcare for Hospitals and Patients
                    </h2>
                    <p className="text-2xl font-semibold pl-10 mb-6">
                        Hospital Management System is an AI-powered platform that helps hospitals and patients manage appointments, medical history, and reports. Patients can also receive basic treatment suggestions and report analysis from our smart AI assistant.
                    </p>
                    <button className="mt-4 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full transition absolute left-[60%] cursor-pointer">
                        Get Started
                    </button>
            </div>
            

        </div>
    )
}
export default HomePage