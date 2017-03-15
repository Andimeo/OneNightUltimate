package one.night.ultimate.model;

public class Player {
	private final String userName;
	private int position;
	private boolean isHost;
	
	public Player(String userName, boolean isHost) {
		this.userName = userName;
		this.isHost = isHost;
	}

	public String getUserName() {
		return userName;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	public boolean isHost() {
		return isHost;
	}

	public void setHost(boolean isHost) {
		this.isHost = isHost;
	}

}
