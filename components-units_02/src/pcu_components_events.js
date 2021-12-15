/* This file includes all the component events.
We need to copy all js code we created here to understand how the event works on the demo page (index.html).
NOTE: Please be sure to use a separator with the element name ! */


function pcuComponentsEvents() {
  /* --------------------------- Docking Panel --------------------------- */
  document.querySelectorAll('.pcu-docking-point').forEach(function(elm) {
    elm.addEventListener('click', function(e) {
      if(e.target.parentElement.classList.contains('direction-docked')){
        e.target.parentElement.classList.remove('direction-docked')
      }
      else{
        e.target.parentElement.classList.add('direction-docked')
      }
    });
  });
  /* --------------------------- Search Field --------------------------- */
  document.querySelectorAll('.topbar-search-input').forEach(function(elm) {
    elm.addEventListener('focus', function(e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });

    elm.addEventListener('focusout', function(e) {
      e.target.parentElement.classList.remove('pcu-field-has-focus')
    });
  });


  /* --------------------------- Dropdown --------------------------- */
  // dropdown focus
  document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function(elm) {
    elm.addEventListener('click', function(e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });
  });

  // select dropdown item
  document.querySelectorAll('.pcu-dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(e) {
      const input = e.target.parentElement.previousElementSibling;
      input.value = e.target.getAttribute('value');
      e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function(sibilingItem) {
        sibilingItem.classList.remove('selected');
      })
      e.target.classList.add('selected');
      e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
    });

    // close dropdown
    document.addEventListener('click', function(e) {
      if (!e.target.classList.contains('pcu-dropdown-input')) {
        document.querySelectorAll('.pcu-dropdown').forEach(function(dropdowns) {
          dropdowns.classList.remove('pcu-field-has-focus');
        })
      }
    });
  });


  /* --------------------------- Badge --------------------------- */
  // dropdown focus
  document.querySelectorAll('.pcu-dropdown .pcu-text-input').forEach(function(elm) {
    elm.addEventListener('focus', function(e) {
      e.target.parentElement.classList.add('pcu-field-has-focus')
    });
  });

  // select dropdown item & and cahnge the background color
  document.querySelectorAll('.pcu-dropdown[skin="badge"] .pcu-dropdown-content .pcu-dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(e) {
      const input = e.target.parentElement.previousElementSibling;
      input.value = e.target.getAttribute('value');
      e.target.parentElement.querySelectorAll('.pcu-dropdown-item').forEach(function(sibilingItem) {
        sibilingItem.classList.remove('selected');
      })
      e.target.classList.add('selected');
      e.target.parentElement.parentElement.classList.remove('pcu-field-has-focus');
      let color = e.target.children[0].getAttribute('color');
      input.setAttribute('color', color)
    });
  });


  /* --------------------------- Float Notification --------------------------- */
  // remove this notification (after clicking on the x icon)
  document.querySelectorAll('.pcu-float-notification .pcu-float-notification-close').forEach(function(elm) {
    elm.addEventListener('click', function(e) {
      e.target.parentElement.classList.add('remove-notification')
    });
  });


  /* --------------------------- Popover Menu --------------------------- */
  document.querySelectorAll('.pcu-popover-menu').forEach(function(popoverMenu) {
    popoverMenu.addEventListener('click', function(e) {
      this.classList.toggle('pcu-open-popover');
    });
  });


  /* --------------------------- Date Picker --------------------------- */
  document.querySelectorAll('.pcu-calendar-day').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(e) {
      document.querySelectorAll('.pcu-calendar-day').forEach(function(day) {
        day.classList.remove('selected');
      });
      const dayBtn = e.target.parentElement;
      if (!dayBtn.classList.contains('gray-day')) {
        dayBtn.classList.add('selected');
        let theDay = dayBtn.getAttribute('day');
        dayBtn.closest('.pcu-date-picker').children[1].value = '09/' + theDay + '/2021';
      }
    });
  });


  /* --------------------------- Table --------------------------- */
  // open more menu
  // document.querySelectorAll('.pcu-popover-menu').forEach(function(popoverMenu) {
  //   popoverMenu.addEventListener('click', function (e) {
  //     this.classList.toggle('pcu-open-popover');
  //   });
  // });

    // select all checkbox
    document.querySelectorAll('.pcu-table-select-all').forEach(function(popoverMenu) {
      popoverMenu.addEventListener('change', function(e) {
        const table = e.target.parentNode.closest('.pcu-table');
        if(e.target.checked) {
          table.querySelectorAll('.pcu-checkbox-input').forEach(function(checkbox) {
            checkbox.checked = true;
          });
        } else {
          table.querySelectorAll('.pcu-checkbox-input').forEach(function(checkbox) {
            checkbox.checked = false;
          });
        }
      });
    });
}
