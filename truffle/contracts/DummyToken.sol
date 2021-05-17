pragma solidity ^0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DummyToken is ERC20 {

    address owner;

    event TokensGiven(address receiver);

    constructor () ERC20("DUMMY","DUM") {
	_setupDecimals(1);
        owner = msg.sender;
    }

    function getTokens(uint amount) public {
         _mint(msg.sender, amount);
	emit TokensGiven(msg.sender);
    }
    
}