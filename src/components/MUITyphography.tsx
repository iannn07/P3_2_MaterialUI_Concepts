import { Typography } from "@mui/material"

const MUITyphography = () => {
  return (
    <div>
      <Typography variant='h1'>Anything</Typography>
      <Typography variant='h2'>Anything</Typography>
      <Typography variant='h3'>Anything</Typography>
      <Typography variant='h4'>Anything</Typography>
      <Typography variant='h5'>Anything</Typography>
      <Typography variant='subtitle1'>Subtitle Anything</Typography>
      <Typography variant='subtitle1'>Subtitle Anything</Typography>
      <Typography variant='body1'>Body Anything</Typography>

      {/* Add margin */}
      <Typography variant='h5' component={'h1'} m={5}>Anything</Typography>

      {/* To Cast the props element */}
      <Typography variant='h5' component={'h1'}>Anything</Typography>

    </div>
  )
}

export default MUITyphography
