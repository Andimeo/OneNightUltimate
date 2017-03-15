package one.night.ultimate.message;

public class LoginRequest {
	private String userName;

	public LoginRequest() {
	}

	public LoginRequest(String userName) {
		this.setUserName(userName);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
