import {
  getColor,
  getColorContrast,
  getColorContrastShade,
  getColorShade,
} from '../getColor';
import theme from '../../../stories/theme';

describe('getColor()', () => {
  it('passes color correctly', () => {
    const color = getColor()({ theme, color: 'p' });
    expect(color).toEqual(theme.p);
  });
  it('works with the default', () => {
    const color = getColor('pc')({ theme, color: 'not_existing' });
    expect(color).toEqual(theme.pc);
  });
  it('takes a hex', () => {
    const hex = '#FFFFFF';
    const color = getColor(hex)({ theme, color: hex });
    expect(color).toEqual(hex);
  });
  it('takes an rgb', () => {
    const rgb = 'rgb(0,0,0)';
    const color = getColor(rgb)({ theme, color: rgb });
    expect(color).toEqual(rgb);
  });
});

describe('getColorContrast()', () => {
  it('passes color correctly', () => {
    const color = getColorContrast()({ theme, color: 'p' });
    expect(color).toEqual(theme.pc);
  });
  it('works with the default', () => {
    const color = getColorContrast('s')({ theme, color: 'not_existing' });
    expect(color).toEqual(theme.sc);
  });
});

describe('getColorContrastShade()', () => {
  it('passes color correctly', () => {
    const shade = 300;
    const color = getColorContrastShade({ default: 'p', shade })({
      theme,
      color: 's',
    });
    expect(color).toEqual(theme.sc[shade]);
  });
  it('works with the default', () => {
    const color = getColorContrastShade({ default: 'p' })({
      theme,
      color: 'not_existing',
    });
    expect(color).toEqual(theme.pc[600]);
  });
});

describe('getColorShade()', () => {
  it('passes color correctly', () => {
    const shade = 300;
    const color = getColorShade({ default: 'p', shade })({
      theme,
      color: 's',
    });
    expect(color).toEqual(theme.s[shade]);
  });
  it('works with the default', () => {
    const color = getColorShade({ default: 'p' })({
      theme,
      color: 'not_existing',
    });
    expect(color).toEqual(theme.p[600]);
  });
});
