export class ResponseHelper {
  static success(data: any = null, message = 'Success') {
    return {
      success: true,
      data,
      message,
    };
  }

  static error(message = 'Something went wrong', data: any = null) {
    return {
      success: false,
      data,
      message,
    };
  }
}
