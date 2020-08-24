import PromiseCanceledError from "./PromiseCanceledError";
import * as withDeferred from "./deferred";

import type {Deferred} from "./deferred";

type Cancel = (reason?: string) => void;

type CancelablePromise<TResult> = {
  promise: Promise<TResult>;
  cancel: Cancel;
};

type CancelableIgnoredPromise<TResult> = CancelablePromise<void | TResult>;

const cancelUsing = <TResult>(deferred: Deferred<TResult>) => (
  reason?: string
) => deferred.reject(new PromiseCanceledError(reason));

const create = <TResult>(
  promise: Promise<TResult>
): CancelablePromise<TResult> => {
  const deferred = withDeferred.create<TResult>();

  return {
    cancel: cancelUsing(deferred),
    promise: Promise.race([deferred.promise, promise])
  };
};

const createIgnored = <TResult>(
  promise: Promise<TResult>
): CancelableIgnoredPromise<TResult> => {
  const cancelablePromise = create(promise);

  return {
    cancel: cancelablePromise.cancel,
    promise: PromiseCanceledError.ignore(cancelablePromise.promise)
  };
};

export {create, createIgnored};

export type {CancelableIgnoredPromise, CancelablePromise};
