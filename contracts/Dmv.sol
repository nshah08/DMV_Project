// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract DMV{

    struct registration{
        string vin;
        uint date;
    }

    struct addy{
        string street;
        string city;
        string state;
        uint zip;
    }
    
    struct dl{
        string dlid;
    }

    mapping(address=>registration) regs;
    mapping(address=>addy) addys;
    mapping(address=>dl) dls;
    mapping(address => uint) balances;

    function regset(address _address, string memory _vin, uint _date) public{
        regs[_address] = registration(_vin, _date);
    }

    function getreg(address _address) view public returns(string memory, uint){
        return (regs[_address].vin, regs[_address].date);
    }

    function regpay() external payable{
        if(msg.value < 1 ether){
            revert();
        }
        balances[msg.sender] += msg.value;
    }

    function addyset(address _address, string memory _street, string memory _city, string memory _state, uint _zip) public{
        addys[_address] = addy(_street, _city, _state, _zip);
    }

    function getaddy(address _address) view public returns(string memory, string memory, string memory, uint){
        return (addys[_address].street, addys[_address].city, addys[_address].state, addys[_address].zip);
    }

    function dlset(address _address, string memory _dlid) public{
        dls[_address] = dl(_dlid);
    }

    function getdl(address _address) view public returns(string memory){
        return(dls[_address].dlid);
    }
    
    function dlpay() external payable{
        if(msg.value < 1 ether){
            revert();
        }
        balances[msg.sender] += msg.value;
    }

}