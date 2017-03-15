package one.night.ultimate.service;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import one.night.ultimate.message.LoginStatus;
import one.night.ultimate.model.Player;

@Service
public class GameService {
	private Map<String, Player> map;

	public GameService() {
		map = new ConcurrentHashMap<String, Player>();
	}

	public LoginStatus Login(String userName) {
		if (map.containsKey(userName)) {
			return LoginStatus.FAILED_LOGIN_STATUS;
		}
		boolean isHost = map.isEmpty();

		Player player = new Player(userName, isHost);
		map.put(userName, player);

		return new LoginStatus(true, isHost);
	}
}
