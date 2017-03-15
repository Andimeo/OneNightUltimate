package one.night.ultimate.message;

public class LoginResponse extends ResponseMessage{
	public static final LoginResponse FAILED_LOGIN_STATUS = new LoginResponse();

	private boolean isSuccess;
	private boolean isHost;

	public LoginResponse() {
		this(false, false);
	}

	public LoginResponse(boolean isSuccess, boolean isHost) {
		super();
		this.isSuccess = isSuccess;
		this.isHost = isHost;
	}

	public boolean isSuccess() {
		return isSuccess;
	}

	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

	public boolean isHost() {
		return isHost;
	}

	public void setHost(boolean isHost) {
		this.isHost = isHost;
	}

}
