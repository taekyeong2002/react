export default function MyButton() {
  function handleClick() {
    alert('Hello world');
  }
  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  )
}