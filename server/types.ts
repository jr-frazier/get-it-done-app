export type ErrorResponse = { error: string }

export function isErrorResponse(
    data: unknown
): data is ErrorResponse {
    return typeof data === "object" && data !== null && "error" in data;
}

export type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: string };
