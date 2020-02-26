var favoriteIcecreamFlavors = ["Chocolate", "Mocha", "Caramel", "Mint", "Vanilla"]

$(document).ready(function() {
  favoriteIcecreamFlavors.forEach(function(favoriteIcecreamFlavor) {
  $("#favoriteFlavors").append(favoriteIcecreamFlavor + ", ")
  });
});