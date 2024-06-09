export const checkErrorRateLimit = (err: any) =>
  err?.status === '403' && err?.message?.includes('rate limit');
