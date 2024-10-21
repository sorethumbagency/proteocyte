  document.addEventListener('DOMContentLoaded', function() {

    // Change team/board/founder positions from <p> to <h3>
    const positions = Array.from(document.querySelectorAll("p.et_pb_member_position"));
  
    positions.forEach(position => {
      const h3 = document.createElement('h3');
      h3.innerHTML = position.innerHTML;
      h3.setAttribute('style', 'font-weight: 600 !important; font-size: 16px !important; color: #1e9583 !important;');
      position.replaceWith(h3);
      });

  
  });
