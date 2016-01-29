import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('youtube-movie', 'Integration | Component | youtube movie', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{youtube-movie}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#youtube-movie}}
      template block text
    {{/youtube-movie}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
