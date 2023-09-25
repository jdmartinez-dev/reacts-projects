import { useCatImage } from "../hooks/useCatImage";

export function Others() {
  const { imageUrl } = useCatImage({ fact: 'cat' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}