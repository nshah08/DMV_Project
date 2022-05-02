// SPDX-License-Identifier: MIT
//What to work on integrating all the function calls and adding them sa we go and fixing the update of dates on vehicle registration and updates when inputting for now i sleep

pragma solidity ^0.8.9;

contract DMV{

    address public owner;

    modifier onlyOwner{
        require(msg.sender == owner);
        _;
    }

    struct registration{
        string vin;
        uint date;
        string make;
        uint makeyear;
        string title;
    }

    struct addy{
        string street;
        string city;
        string state;
        uint zip;
    }
    
    struct dl{
        string dlid;
        string name;
        uint dob;
        uint date;
    }

    struct realid{
        string dlid;
        string ssn;
    }

    struct title{
        string make;
        uint makeYear;
        string title;
        string name;
    }
    constructor(){
        owner = msg.sender;
    }
    mapping(address=>registration) regs;
    mapping(address=>addy) addys;
    mapping(address=>dl) dls;
    mapping(address => uint) balances;
    mapping (address => realid) realids;
    mapping (address => title) titles;

    function regset(address _address, string memory _vin, uint _date, string memory _make, uint _makeyear, string memory _title) public{
        regs[_address] = registration(_vin, _date, _make, _makeyear, _title);
    }

    function getreg(address _address) view public returns(string memory, uint, string memory, uint, string memory){
        return (regs[_address].vin, regs[_address].date, regs[_address].make, regs[_address].makeyear, regs[_address].title);
    }

    function regpay() external payable onlyOwner{
        require(msg.value == 0.014096 ether);
        balances[msg.sender] += msg.value;
    }

    function addyset(address _address, string memory _street, string memory _city, string memory _state, uint _zip) public{
        addys[_address] = addy(_street, _city, _state, _zip);
    }

    function getaddy(address _address) view public returns(string memory, string memory, string memory, uint){
        return (addys[_address].street, addys[_address].city, addys[_address].state, addys[_address].zip);
    }

    function dlset(address _address, string memory _dlid, string memory _name, uint _dob,uint _date) public{
        dls[_address] = dl(_dlid, _name, _dob, _date);
    }

    function getdl(address _address) view public returns(string memory, string memory, uint, uint){
        return(dls[_address].dlid, dls[_address].name, dls[_address].dob, dls[_address].date);
    }
    
    function dlpay() external payable onlyOwner{
        require(msg.value == 0.011276 ether);
        balances[msg.sender] += msg.value;
    }

    function report(address _first, address _second) public{
        titles[_second] = title(regs[_first].make, regs[_first].makeyear, regs[_first].title, dls[_second].name);
        delete regs[_first];
    }

    function setrealid(address _address, string memory _dlid, string memory _ssn) public payable onlyOwner{
        require(msg.value == 0.003527 ether);
        balances[msg.sender] += msg.value;
        realids[_address] = realid(_dlid, _ssn);
    }

    function recordpay() external payable onlyOwner{
        require(msg.value == 0.004280 ether);
        balances[msg.sender] += msg.value;
    }

    function pracexampay() external payable onlyOwner{
        require(msg.value == 0.035760 ether);
        balances[msg.sender] += msg.value;
    }
    function sell(address _seller, address _buyer, uint amount) public payable{
        require(amount > 0 ether);
        regs[_buyer] = registration(regs[_seller].vin, regs[_seller].date, regs[_seller].make, regs[_seller].makeyear, regs[_seller].title);
        delete regs[_seller];
    }

    function settitle(address _address, string memory _make, uint _makeYear, string memory _title) public payable onlyOwner{
            require(msg.value == 0.005306 ether);
            titles[_address] = title(_make, _makeYear, _title, dls[_address].name );
    }
}