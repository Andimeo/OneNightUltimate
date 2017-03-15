package one.night.ultimate.message;

public class LoginMessage {
	private String userName;

	public LoginMessage() {
	}

	public LoginMessage(String userName) {
		this.setUserName(userName);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}
}
