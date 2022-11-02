const FolderCompnents = () => {
  return (
    <svg 
      clip-rule="evenodd" 
      fill-rule="evenodd" 
      stroke-linejoin="round" 
      stroke-miterlimit="1.414" 
      viewBox="0 0 24 24" 
      xml:space="preserve" 
      xmlns="http://www.w3.org/2000/svg"
      fill="#f0f4c3"
    >
      <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.097.903 2 2 2h16c1.097 0 2-.903 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" fill="#c0ca33" fill-rule="nonzero"/><path d="M11.097 9.613h5.346v2.9l3.782-3.775L24 12.513l-3.775 3.782h2.9v5.346h-5.346v-5.346h2.446l-3.782-3.782v2.446h-5.346V9.613m0 6.682h5.346v5.346h-5.346z" />
    </svg>
  )
}

const FolderCompnentsOpen = () => {
  return (
    <svg 
      clip-rule="evenodd" 
      stroke-linejoin="round" 
      stroke-miterlimit="1.414"
      viewBox="0 0 24 24" 
      xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
      fill="#f0f4c3"
    >
      <path d="M19 20H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h7c1.097 0 2 .903 2 2H4v10l2.14-8h17.07l-2.28 8.5c-.23.87-1.01 1.5-1.93 1.5z" fill="#c0ca33"/><path d="M11.097 9.613h5.346v2.9l3.782-3.775L24 12.513l-3.775 3.782h2.9v5.346h-5.346v-5.346h2.446l-3.782-3.782v2.446h-5.346V9.613m0 6.682h5.346v5.346h-5.346z" />
    </svg>
  )
}

export { FolderCompnents, FolderCompnentsOpen }