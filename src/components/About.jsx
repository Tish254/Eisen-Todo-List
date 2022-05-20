import Title from "./Title";
import AboutSchedule from "./AboutSchedule";
import AboutDelegate from "./AboutDelegate";
import AboutDo from "./AboutDo";
import AboutDelete from "./AboutDelete";

const About= ({menuClicked}) => {
  return (
    <div className="flex flex-col justify-between md:w-[70%] pt-3 pr-10 pb-10">
        <Title title={"About"} menuClicked={menuClicked}/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full place-content-stretch mt-3 overflow-y-auto h-[25rem] scrollbar-thin scrollbar-thumb-violet-200 scrollbar-track-violet-100 scrollbar-thumb-rounded">
          <AboutDo/>
           <AboutSchedule/>
           <AboutDelegate/>
           <AboutDelete/>
        </div>

    </div>
  )
}

export default About