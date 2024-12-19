export default class Responses extends Response {
  constructor(response: Response) {
    super(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  }

  isBadRequest(): boolean {
    return this.status === 400;
  }

  isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }

  isServerError(): boolean {
    return this.status >= 500 && this.status < 600;
  }
}
