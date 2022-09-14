function handleButtonClick(color1, color2) {
  const bodyEl = document.body;
  const bodyColor = bodyEl.style.color;
  const nextColor = bodyColor === color1 ? color2 : color1;

  bodyEl.style.color = nextColor;
  
}
