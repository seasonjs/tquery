/**
 * rollup 打包后环境测试
 */
import $ from '../../dist/tq'

test('test instance create', function () {
  expect($('document')).not.toBeNull();
  expect($(document.getElementsByTagName('body'))).not.toBeNull();
});
