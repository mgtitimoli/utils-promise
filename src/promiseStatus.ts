const promiseStatuses = {
  idle: "idle",
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected"
} as const;

type PromiseStatus = typeof promiseStatuses[keyof typeof promiseStatuses];

export {promiseStatuses};

export type {PromiseStatus};
