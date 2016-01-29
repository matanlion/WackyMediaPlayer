import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('youtube-video-player', 'Integration | Component | youtube video player', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{youtube-video-player}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#youtube-video-player}}
      template block text
    {{/youtube-video-player}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
