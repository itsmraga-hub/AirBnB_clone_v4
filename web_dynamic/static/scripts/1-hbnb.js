$(document).ready(() => {
  let amenities = {};
  $(document).on('change', "input[type='checkbox']", () => {
    if (this.checked) {
      const key = $(this).data('id');
      amenities[key] = $(this).data('name');
    } else {
      delete amenities[key];
    }
    let lst = Object.values(amenities);
    if (lst.length > 0) {
      $('div.amenities > h4').text(Object.values(amenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});
