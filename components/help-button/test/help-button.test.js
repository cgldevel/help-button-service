import { html, fixture, expect } from '@open-wc/testing';

import '../help-button.js';

describe('HelpButton', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`
      <help-button></help-button>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`
      <help-button></help-button>
    `);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <help-button title="attribute title"></help-button>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`
      <help-button></help-button>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
