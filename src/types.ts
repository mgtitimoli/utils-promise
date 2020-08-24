type PromiseResolve<TResult> = (
  result?: TResult | PromiseLike<TResult> | undefined
) => void;

type PromiseReject = (reason?: unknown) => void;

export type {PromiseReject, PromiseResolve};
