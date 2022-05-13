const Title = ({title}) => {
  return (
    <div className="self-start justify-start">
        <h1 className="relative text-3xl font-bold before:block before:content[''] before:-mt-2 before:h-1.5 before:absolute before:left-0 before:w-6 before:rounded before:bg-violet-600">
            {title}
        </h1>
        <p className="font-extralight">
            Friday, May 13, 2022
        </p>
    </div>
  )
}

export default Title