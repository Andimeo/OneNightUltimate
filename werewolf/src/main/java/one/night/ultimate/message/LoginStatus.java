package one.night.ultimate.message;

public class LoginStatus {
	public static final LoginStatus FAILED_LOGIN_STATUS = new LoginStatus();

	private boolean isSuccess;
	private boolean isHost;

	public LoginStatus() {
		this(false, false);
	}

	public LoginStatus(boolean isSuccess, boolean isHost) {
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
