package one.night.ultimate.message;

import java.util.List;

public class SelectRequest extends HostMessage{
	private List<String> roleNames;
	
	public SelectRequest() {
	}
	
	public SelectRequest(String hostName, List<String> roleNames) {
		super(hostName);
		this.setRoleNames(roleNames);
	}

	public List<String> getRoleNames() {
		return roleNames;
	}

	public void setRoleNames(List<String> roleNames) {
		this.roleNames = roleNames;
	}
	
	
}
