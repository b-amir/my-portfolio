export function clickToSelectText(elementId: string) {
  return (e) => {
    const elementToSelect = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNodeContents(elementToSelect);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  };
}
};
