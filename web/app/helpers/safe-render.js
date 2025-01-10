// app/helpers/safe-render.js
import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function safeRender([text]) {
  if (!text) {
    return '';
  }
  return htmlSafe(text.replace(/\n/g, '<br>'));
});
