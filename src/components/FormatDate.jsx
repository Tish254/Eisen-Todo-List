import moment from "moment"

const FormatDate = ({dateValue}) => {
  return (
      <>
        {moment(new Date(dateValue)).format('MMMM Do YYYY, h:mm:ss a')}
      </>
  )
}

FormatDate.defaultProps = {
    dateValue: ""
}

export default FormatDate