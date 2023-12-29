export function clickToSelectText(elementId: string) {
  return (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    e.preventDefault();
    const elementToSelect = document.getElementById(elementId);
    if (elementToSelect) {
      const range = document.createRange();
      range.selectNodeContents(elementToSelect);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };
}