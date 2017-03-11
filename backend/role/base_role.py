import abc

from backend import card_deck
from backend import operation

class BaseRole(object):
    def __init__(self, index):
        self.index = index

    def handle(self, op, card_deck):
        if not isinstance(op, operation.Operation):
            raise Exception("argument type incorrect")
        if not isinstance(card_deck, card_deck.CardDeck):
            raise Exception("argument type incorrect")
        return self._handle_op(op, card_deck)

    @abc.abstractmethod
    def _handle_op(self, op, card_deck):
        pass
