/* This file allows us to save long code (html / js) separately.
So you can define a variable with the long code and use it in wsr_components.js file.
Use a consistent name depending on the component ! */

const dropdownJs = `// dropdown focus
document.querySelectorAll('.wsr-dropdown .wsr-text-input').forEach(function(elm) {
  elm.addEventListener('focus', function(e) {
    e.target.parentElement.classList.add('wsr-field-has-focus')
  });
});

// select dropdown item
document.querySelectorAll('.wsr-dropdown-item').forEach(function(dropdownItem) {
  dropdownItem.addEventListener('click', function(e) {
    const input = e.target.parentElement.previousElementSibling;
    input.value = e.target.getAttribute('value');
    e.target.parentElement.querySelectorAll('.wsr-dropdown-item').forEach(function(sibilingItem) {
      sibilingItem.classList.remove('selected');
    })
    e.target.classList.add('selected');
    e.target.parentElement.parentElement.classList.remove('wsr-field-has-focus');
  });

  // close dropdown
  document.addEventListener('click', function(e) {
    if(!e.target.classList.contains('wsr-dropdown-input')) {
      document.querySelectorAll('.wsr-dropdown').forEach(function(dropdowns) {
        dropdowns.classList.remove('wsr-field-has-focus');
      })
    }
  });
});`

const badgeJs = `// dropdown focus
document.querySelectorAll('.wsr-dropdown .wsr-text-input').forEach(function(elm) {
elm.addEventListener('focus', function(e) {
e.target.parentElement.classList.add('wsr-field-has-focus')
});
});

// select dropdown item & and cahnge the background color
document.querySelectorAll('.wsr-dropdown[skin="badge"] .wsr-dropdown-content .wsr-dropdown-item').forEach(function(dropdownItem) {
dropdownItem.addEventListener('click', function(e) {
const input = e.target.parentElement.previousElementSibling;
input.value = e.target.getAttribute('value');
e.target.parentElement.querySelectorAll('.wsr-dropdown-item').forEach(function(sibilingItem) {
sibilingItem.classList.remove('selected');
})
e.target.classList.add('selected');
e.target.parentElement.parentElement.classList.remove('wsr-field-has-focus');
let color = e.target.children[0].getAttribute('color');
input.setAttribute('color', color)
});
});`

const floatNotificationJs = `// remove this notification (after clicking on the x icon)
  document.querySelectorAll('.wsr-float-notification .wsr-float-notification-close').forEach(function(elm) {
    elm.addEventListener('click', function(e) {
      e.target.parentElement.classList.add('remove-notification')
    });
  });`
