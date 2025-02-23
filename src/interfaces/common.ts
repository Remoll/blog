interface SelectOption {
  value: string;
  label: string;
}

enum SortOrder {
  newest = "newest",
  oldest = "oldest",
}

interface SuccessResponse<T> {
  data: T;
  error: null;
}

interface FailedResponse {
  data: null;
  error: string;
}

type FetchResponse<T> = SuccessResponse<T> | FailedResponse;

export { type SelectOption, SortOrder, type FetchResponse };
