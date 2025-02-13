import { FakeOptions, fake } from './core/core';
import { data } from './user-agent.json';

/**
 * Generate a random user agent.
 *
 * @category internet
 *
 * @example
 *
 * randUserAgent()
 *
 * @example
 *
 * randUserAgent({ length: 10 })
 *
 */
export function randUserAgent<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
