import React from 'react'
import { Button } from '../button'
import { ActualUrl, OuterContainer, CopyButton, ShortUrl, UrlContainer } from './ShortenedUrlElements'

function ShortenedUrl() {
  return (
    <OuterContainer>
    <UrlContainer>
      <ActualUrl>
        https://www.youtube.com/watch?v=BJoFmfK8cZM
      </ActualUrl>
      <ShortUrl>
        https://www.youtube.com
      </ShortUrl>
      <Button
        ShortlyButton={CopyButton}
        name='COPY'
        type='submit'
      />
    </UrlContainer>
    </OuterContainer>
  )
}

export default ShortenedUrl
