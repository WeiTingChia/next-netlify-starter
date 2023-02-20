export default function Link({ link, content }){
  return (
    <>
      <a href={link} class="text-black">{content}</a>
    </>
  )
}