package one.night.ultimate.message;

public class ResponseMessage {
	private int errorCode;

	public static ResponseMessage SUCCESS_RESPONSE = new ResponseMessage();

	public ResponseMessage() {
		this(0);
	}

	public ResponseMessage(int errorCode) {
		this.setErrorCode(errorCode);
	}

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public static ResponseMessage fromErrorCode(int errorCode) {
		ResponseMessage response = new ResponseMessage();
		response.setErrorCode(errorCode);
		return response;
	}

}
