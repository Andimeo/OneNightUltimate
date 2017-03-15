package one.night.ultimate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import one.night.ultimate.message.LoginRequest;
import one.night.ultimate.message.ResponseMessage;
import one.night.ultimate.message.SelectRequest;
import one.night.ultimate.message.StartRequest;
import one.night.ultimate.service.GameService;

@Controller
public class GameController {
	@Autowired
	private GameService gameService;

	public ResponseMessage login(LoginRequest message) {
		return gameService.Login(message.getUserName());
	}

	public ResponseMessage start(StartRequest message) {
		return gameService.start(message.getHostName());
	}

	public ResponseMessage select(SelectRequest message) {
		return gameService.select(message.getHostName(), message.getRoleNames());
	}
}
