import Title from "./Title";
import AboutSchedule from "./AboutSchedule";
import AboutDelegate from "./AboutDelegate";
import AboutDo from "./AboutDo";
import AboutDelete from "./AboutDelete";

const About= ({menuClicked}) => {
  return (
    <div className="flex flex-col justify-between w-3/5 pt-10 pr-10 pb-10">
        <Title title={"About"} menuClicked={menuClicked}/>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full place-content-stretch mt-3">
          <AboutDo/>
           <AboutSchedule/>
           <AboutDelegate/>
           <AboutDelete/>
        </div>

    </div>
  )
}

export default About