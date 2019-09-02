import '../Utils'

test('os output', function () {
  expect(Utils.os()).not.toBeNull();
  console.log(Utils.os());
});
