type Deferred<TResult> = {
  promise: Promise<TResult>;
  reject: (error: Error) => void;
  resolve: (result: TResult) => void;
};

const create = <TResult>(): Deferred<TResult> => {
  const deferred = {} as Deferred<TResult>;

  deferred.promise = new Promise((resolve, reject) =>
    Object.assign(deferred, {resolve, reject})
  );

  return deferred;
};

export {create};

export type {Deferred};
