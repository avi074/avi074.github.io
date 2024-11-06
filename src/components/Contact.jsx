import {
  Typography,
  Card,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react"

function Contact() {
  return (
    <Card
      color='transparent'
      shadow={false}
      className='w-full xl:w-1/2 mx-auto'>
      <Typography variant='h1' className='text-primary-400 text-center mb-8'>
        Contact me
      </Typography>
      <form id='contact-form'>
        <div className='flex gap-4 min-w-52 mb-4'>
          <Input
            type='text'
            placeholder='Enter your name'
            label='Name'
            required
            className='input-primary'
            labelProps={{ className: "input-label" }}
          />
          <Input
            type='email'
            placeholder='Enter your email'
            label='Email'
            required
            className='input-primary'
            labelProps={{ className: "input-label" }}
          />
        </div>

        <Textarea
          label='What can I help you with'
          placeholder="Enter your message"
          rows={10}
          required
          className='input-primary'
          labelProps={{ className: "input-label" }}></Textarea>

        <div className='flex gap-8 justify-center items-center px-8 my-4'>
          <Button
            type='submit'
            variant='gradient'
            color='green'
            className='btn-primary'>
            Send
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='red'
            className='btn-primary'>
            Reset
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default Contact
