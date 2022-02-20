export function buildErrorResponse(response: any) {
  return {
    status: {
      code: response.code || 9999,
      header: "Unable to proceed",
      description: "Oops! Something went wrong.",
      moreInfo: null
    }
  }
}
