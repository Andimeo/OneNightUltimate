package one.night.ultimate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import one.night.ultimate.message.LoginMessage;
import one.night.ultimate.message.LoginStatus;
import one.night.ultimate.service.GameService;

@Controller
public class GameController {
	@Autowired
	private GameService gameService;

	public LoginStatus Login(LoginMessage message) {
		return gameService.Login(message.getUserName());
	}
	
}
