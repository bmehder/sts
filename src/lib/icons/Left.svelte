<button on:click aria-label="previous">
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16L9.43 14.607L3.85 9L16 9L16 7L3.85 7L9.43 1.427L8 -6.99382e-07L6.99382e-07 8L8 16Z"
      fill="#666666"
    />
  </svg>
</button>

<style>
	button {
		display: grid;
		place-items: center;
		width: 32px;
		margin: auto;
    padding: 0;
		aspect-ratio: 1;
		border: 1px solid;
		border-radius: 50%;

    &:hover {
			background-color: var(--teal);
		}
		
		&:hover svg path {
			fill: white;
		}
	}
</style>