package one.night.ultimate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicReference;

import org.springframework.stereotype.Service;

import one.night.ultimate.error.ErrorCode;
import one.night.ultimate.message.LoginResponse;
import one.night.ultimate.message.ResponseMessage;
import one.night.ultimate.model.Player;
import one.night.ultimate.role.Role;
import one.night.ultimate.role.RoleCollection;

@Service
public class GameService {
	private enum Status {
		INITIALIZED, ROLE_SELECTED, STARTED, ENDED,
	}

	private List<Role> roleRegistry;
	private Map<String, Player> map;
	private AtomicReference<Status> status;

	public GameService() {
		roleRegistry = new ArrayList<Role>();
		map = new ConcurrentHashMap<String, Player>();
		status = new AtomicReference<Status>(Status.INITIALIZED);
	}

	public ResponseMessage Login(String userName) {
		if (map.containsKey(userName)) {
			return LoginResponse.FAILED_LOGIN_STATUS;
		}
		boolean isHost = map.isEmpty();

		Player player = new Player(userName, isHost);
		map.put(userName, player);
		//TODO: when the login succeeded, we should create a channel targeting that player,
		// and return the channel to client, and client should immediately subscribe it once
		// receiving that response
		return new LoginResponse(true, isHost);
	}

	public ResponseMessage select(String userName, List<String> roleNames) {
		if (status.get() != Status.INITIALIZED) {
			return ResponseMessage.fromErrorCode(ErrorCode.INCORRECT_INTERNAL_STATUS);
		}

		for (String roleName : roleNames) {
			Role role = RoleCollection.getRole(roleName);
			if (role == null) {
				roleRegistry.clear();
				return ResponseMessage.fromErrorCode(ErrorCode.ROLE_NOT_EXIST);
			}
			roleRegistry.add(role);
		}

		status.set(Status.ROLE_SELECTED);
		return ResponseMessage.SUCCESS_RESPONSE;
	}

	public ResponseMessage start(String userName) {
		if (status.get() != Status.ROLE_SELECTED) {
			return ResponseMessage.fromErrorCode(ErrorCode.INCORRECT_INTERNAL_STATUS);
		}
		status.set(Status.STARTED);
		return ResponseMessage.SUCCESS_RESPONSE;
	}
}
