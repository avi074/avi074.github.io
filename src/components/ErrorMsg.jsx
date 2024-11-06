import { Typography } from "@material-tailwind/react"

function ErrorMsg({ code = 404, message = "Page not found" }) {
  return (
    <div className='flex items-center justify-center flex-col p-8 border-2 border-primary-100 rounded-xl shadow-xl w-fit mx-auto mt-8'>
      <Typography variant='h1' color='red'>
        Error {code}
      </Typography>
      <Typography variant='h2'>{message}</Typography>
    </div>
  )
}

export default ErrorMsg
