import { useEffect, useState } from "react"
import { getUrlImage } from "../services/facts"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const CAT_PARAMS_IMAGE_URL = '/cat/says/cat?size=50&color=red&json=true'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la imagen al tener una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    getUrlImage(threeFirstWords).then(url => setImageUrl(url))
  }, [fact])

  if (imageUrl == undefined) {
    setImageUrl(CAT_PARAMS_IMAGE_URL)
  }
  
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl: 'https://...' }