import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') content;
  @attr('date') created_at;
  @attr('date') updated_at;
  @attr('date') published_at;
}
