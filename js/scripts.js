// searches from the input field
function search() {
  var input, filter, searchContainer, img, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  searchContainer = document.getElementById("searchContainer");
  a = searchContainer.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    img = a[i].getElementsByTagName("img")[0];
    txtValue = img.alt;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Adds caption to the bottom of the lightbox
$.featherlightGallery.prototype.afterContent = function () {
  var caption = this.$currentTarget.find('img').attr('data-featherlight-caption');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};
