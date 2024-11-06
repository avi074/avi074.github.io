import { Spinner, Typography } from "@material-tailwind/react"

export default function Loader() {
  return (
    <div className="absolute w-screen h-screen z-auto flex flex-col text-pri gap-2 justify-center items-center p-4 backdrop-blur ">
      <Spinner className="w-1/5 h-1/5 max-w-80 max-h-80 dark:text-inherit "/>
      <Typography variant="h5" className="text-center">Loading ...</Typography>
    </div>
  )
}
