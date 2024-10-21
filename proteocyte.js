  document.addEventListener('DOMContentLoaded', function() {

    // Change team/board/founder positions from <p> to <h3>
    const positions = Array.from(document.querySelectorAll("p.et_pb_member_position"));
  
    positions.forEach(position => {
      const h3 = document.createElement('h3');
      h3.innerHTML = position.innerHTML;
      h3.classList.add('custom-h3-style');  // Adding the class with important styles
      position.replaceWith(h3);
  
  });
