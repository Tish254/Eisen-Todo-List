import moment from "moment";

const Title = ({title, menuClicked}) => {
  return (
    <div className="flex justify-between">

        <div className="self-start justify-start">
          <h1 className="relative text-3xl font-bold before:block before:content[''] before:-mt-2.5 before:h-1.5 before:absolute before:left-0 before:w-12 md:before:w-10 before:rounded before:bg-violet-600">
              {title}
          </h1>
          <p className="font-extralight text-sm">
              {moment().format('MMMM Do YYYY')}
          </p>
        </div>
        <div>
          <i className="md:hidden in-line block fa-solid fa-bars-staggered text-5xl  font-bold mb-5  text-black-900 hover:text-violet-900" onClick={menuClicked}></i>

        </div>
    </div>
  )
}

export default Title