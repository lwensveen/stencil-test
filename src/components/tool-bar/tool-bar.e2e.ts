import { newE2EPage } from '@stencil/core/testing';

describe('lw-tool-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lw-tool-bar></lw-tool-bar>');

    const element = await page.find('lw-tool-bar');
    expect(element).toHaveClass('hydrated');
  });
});
