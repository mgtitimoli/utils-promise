type ShouldIgnore = <TError extends Error>(error: TError) => boolean;

const ignoreError = <TResult>(
  promise: Promise<TResult>,
  shouldIgnore?: ShouldIgnore
): Promise<void | TResult> =>
  promise.catch(<TError extends Error>(error: TError) => {
    if (shouldIgnore !== undefined && !shouldIgnore(error)) {
      throw error;
    }
  });

export default ignoreError;
