import CustomError from "@mgtitimoli/utils-error/dist/CustomError";

import ignoreError from "./ignoreError";

class PromiseCanceledError extends CustomError {
  static is<TError extends Error>(error: TError) {
    return error instanceof PromiseCanceledError;
  }

  static ignore<TResult>(promise: Promise<TResult>): Promise<void | TResult> {
    return ignoreError(promise, PromiseCanceledError.is);
  }
}

export default PromiseCanceledError;
