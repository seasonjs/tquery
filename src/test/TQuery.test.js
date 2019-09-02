import { TQuery } from '../TQuery'

function $ (el) {
  return new TQuery(el)
}
// 实例化初始是否成功
test('test instance create', function () {
  expect($('document')).not.toBeNull();
  expect($(document.getElementsByTagName('body'))).not.toBeNull();
});
