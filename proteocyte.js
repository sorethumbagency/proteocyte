
  document.addEventListener('DOMContentLoaded', function() {

    // Change team/board/founder positions from <p> to <h3>
    const positions = Array.from(document.querySelectorAll("p.et_pb_member_position"));
  
    positions.forEach(position => {
      position.outerHTML = '<h3>' + position.innerHTML + '</h3>';
    });

    
  });
