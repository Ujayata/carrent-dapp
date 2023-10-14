// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);
    function approve(address, uint256) external returns (bool);
    function transferFrom(address, address, uint256) external returns (bool);
    function totalSupply() external view  returns (uint256);
    function balanceOf(address) external view  returns (uint256);
    function allowance(address, address) external view  returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract CarBooking {

    // celo cUsd address
    address internal cUsdTokenAddress = 0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    uint256 public carLength;
    uint256 public rentLength;
    
    struct Rent {
        uint256 carID;
        address payable BookingAcount;
        string name;
        string destination;
        uint256 amount;
        bool paid;
    }
    
    struct Car {
        address payable owner;
        string model;
        string image;
        string plateNumber;
        uint256 bookingPrice;
        uint256 rentCar;
        Rent[] carRent; // Store the indices of rents for this car
    }
    
    mapping (uint256 => Car) public cars;
    // mapping (uint256 => Rent) public rents;
    
    function addCar(string memory _model, string memory _imageCar,string memory _plateNumber, uint256 _bookingPrice) public {
         // Use carLength as the carID
        
        Car storage newCar = cars[carLength];
        newCar.owner = payable (msg.sender);
        newCar.model = _model;
        newCar.image = _imageCar;
        newCar.plateNumber = _plateNumber;
        newCar.bookingPrice = _bookingPrice;
        
        carLength++;
    }
    
    function addRent(uint256 _carID, string memory _name, string memory _destination, uint256 _amount) public {
        require(_carID < carLength, "Invalide Car index");
        Rent memory newRent = Rent({
            carID: _carID,
            BookingAcount: payable (msg.sender),
            name: _name,
            destination: _destination,
            amount: _amount,
            paid: false
        });
        
        cars[_carID].carRent.push(newRent);
    }

    function getCars(uint256 _index) public view returns (
        address, string memory, string memory,
        string memory, uint256,
        uint256
    ) {
        return (
            cars[_index].owner,
            cars[_index].model,
            cars[_index].image,
            cars[_index].plateNumber,
            cars[_index].bookingPrice,
            cars[_index].rentCar
        );
    }
    function getRent(uint256 _index) public view returns (
        uint256,
        address,
        string memory,
        string memory,
        uint256,
        bool
    ) {

        Car storage car = cars[_index];
        return (
            car.carRent[_index].carID,
            car.carRent[_index].BookingAcount,
            car.carRent[_index].name,
            car.carRent[_index].destination,
            car.carRent[_index].amount,
            car.carRent[_index].paid
        );
    }

    function getCarLength() public view returns(uint256) {
        return carLength;
    }

    function getRentLength() public view returns(uint256) {
        return rentLength;
    }



    function carRentPayment(uint256 _rentId) external payable  {
        require(cars[_rentId].bookingPrice > msg.value, "Value sending must be greater than booking price");
         require(IERC20Token(cUsdTokenAddress).transferFrom(
            msg.sender,
            cars[_rentId].owner,
            msg.value
         ));
    }
}
