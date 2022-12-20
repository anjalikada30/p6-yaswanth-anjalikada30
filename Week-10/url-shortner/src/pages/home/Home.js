import React from 'react'
import { InputField, ShortenedUrl, ShortlyDescription } from '../../components'
import { HomeContainer } from './HomeElements'

function Home() {
  return (
    <HomeContainer>
      <ShortlyDescription />
      <InputField />
      <ShortenedUrl />
    </HomeContainer>
  )
}

export default Home
