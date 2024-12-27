/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { AnyFunction } from "./generics";

/**
 * Takes a promise function, for example fetching data from an API. Connects a transformer function to the resolve .then() of the promise.
 * Supports typing the input params of the service and return type of the transformer.
 * Prevents a lot of boilerplate code.
 */
const connectServiceToTransformer =
  <T extends AnyFunction<unknown, Promise<unknown>>, K extends AnyFunction>(
    service: T,
    transformer: K
  ): ((
    ...data: Parameters<typeof service>
  ) => Promise<ReturnType<typeof transformer>>) =>
  (...args) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    service(...args).then(transformer);

export default connectServiceToTransformer;
