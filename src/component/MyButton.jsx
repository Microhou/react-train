
// eslint-disable-next-line react/prop-types
function MyButton({count, handleClick}) {

    return (
        <button onClick={handleClick}>Clicked {count} times</button>
    )
}
export default MyButton;