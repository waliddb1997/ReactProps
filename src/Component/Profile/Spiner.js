import React from 'react'


import { Audio } from 'react-loader-spinner';
function Spiner() {
  return (
<Audio
  height="60"
  width="60"
  radius="10"
  color="red"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  )
}

export default Spiner