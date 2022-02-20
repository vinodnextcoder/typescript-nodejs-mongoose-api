const messageResponse: { [key: string]: any } = {
  created: "Record Created",
  updated: "Record Updated",
  deleted: "Record Deleted",
  fetch: "Records fetch",
  notUpdated: "Records not updated"
}
export function successResponse(response: any, recordStatus: string) {
  return {
    status: {
      code: 1000,
      header: "SUCCESS",
      description: messageResponse[recordStatus]
    },
    data: response
  }
}
