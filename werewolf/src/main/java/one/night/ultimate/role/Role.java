package one.night.ultimate.role;

public abstract class Role {
	public abstract String getName();

	public final int getSpeakingOrder() {
		return RoleSpeakingOrder.valueOf(this.getName()).ordinal();
	}

	public String getDescription() {
		return "";
	}
}
