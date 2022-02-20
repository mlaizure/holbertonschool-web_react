import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions', () => {
  it('checks getFullYear returns correct year', () => {
    expect(getFullYear()).toEqual(2022);
  });
  it('checks getFooterCopy with isIndex as true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });
  it('checks getFooterCopy with isIndex as false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
  it('checks getLatestNotification returns HTML string', () => {
    expect(getLatestNotification()).toEqual(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});
