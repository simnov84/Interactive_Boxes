document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
  
    // Add click event to toggle box expansion
    boxes.forEach(box => {
      box.addEventListener('click', () => {
        box.classList.toggle('expanded');
      });
    });
  
    // Add event listeners for color and size changes
    document.querySelectorAll('select').forEach(select => {
      select.addEventListener('change', (e) => {
        const { id, value } = e.target;
  
        if (id.includes('color')) {
          const boxId = id.replace('color', 'box');
          document.getElementById(boxId).style.backgroundColor = value;
        } else if (id.includes('size')) {
          const boxId = id.replace('size', 'box');
          document.getElementById(boxId).style.height = value;
        }
      });
    });
  });
  