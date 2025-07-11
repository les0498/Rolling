function EmojiBar({ iconCount = 0 }) {
  return (
    <div className='Icon'>
      <ol>
        <li>{iconCount}</li>
        <li>{iconCount}</li>
        <li>{iconCount}</li>
      </ol>
      <img src='' alt='allowDown' />
    </div>
  );
}

export default EmojiBar;
