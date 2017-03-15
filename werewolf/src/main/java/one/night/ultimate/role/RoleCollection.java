package one.night.ultimate.role;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.reflections.Reflections;

public class RoleCollection {
	private static Map<String, Role> ROLE_COLLECTION = null;
	private static Log log = LogFactory.getLog(RoleCollection.class);

	public static void init() throws InstantiationException, IllegalAccessException {
		if (ROLE_COLLECTION == null) {
			ROLE_COLLECTION = new HashMap<String, Role>();
		}
		Reflections reflections = new Reflections("one.night.ultimate.role");
		Set<Class<? extends Role>> classes = reflections.getSubTypesOf(Role.class);
		log.info("Totally " + classes.size() + " roles loaded: ");
		for (Class<? extends Role> clazz : classes) {
			Role role = clazz.newInstance();
			ROLE_COLLECTION.put(role.getName(), role);
		}
		log.info(ROLE_COLLECTION.keySet().stream().collect(Collectors.joining(", ")));
	}

	public static Role getRole(String name) {
		for (Role role : ROLE_COLLECTION.values()) {
			if (role.getName().equals(name)) {
				return role;
			}
		}
		return null;
	}
}
