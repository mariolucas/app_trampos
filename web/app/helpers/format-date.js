// app/helpers/format-date.js
import { helper } from '@ember/component/helper';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default helper(function formatDate([date, formatStr = 'dd MMM yyyy']) {
  if (!date) {
    return '';
  }

  return format(new Date(date), formatStr, { locale: ptBR });
});
