// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CarBooking is Ownable, Pausable {

    enum CarStatus {
        NOT_ACCEPTED,
        ACCEPTED,
        OUT_OF_SERVICE
    }

    enum OrderStatus {
        OPEN,
        IN_PROGRESS,
        CANCELLED,
        COMPLETED
    }

    struct Rent {
        uint256 carID;
        address carAddress;
        address bookingAccount;
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
        CarStatus carStatus;
        OrderStatus orderStatus;
        Rent[] carRents; // Store the indices of rents for this car
    }

    mapping (uint256 => Car) public cars;

    IERC20 private cUsdToken;

    event CarAdded(uint256 indexed carID, address indexed owner, string model, string plateNumber);
    event CarStatusChanged(uint256 indexed carID, CarStatus newStatus);
    event RentAdded(uint256 indexed carID, address indexed bookingAccount, string name, string destination, uint256 amount);
    event RentPaid(uint256 indexed carID, address indexed bookingAccount, uint256 amount);

    constructor(address _cUsdTokenAddress) {
        require(_cUsdTokenAddress != address(0), "Invalid cUsdTokenAddress");
        cUsdToken = IERC20(_cUsdTokenAddress);
    }

    modifier onlyCarOwner(uint256 _carID) {
        require(msg.sender == cars[_carID].owner, "Only the car owner can call this function");
        _;
    }

    modifier onlyAdmin() {
        require(owner() == msg.sender, "Only admin can call this function");
        _;
    }

    function addCar(string memory _model, string memory _imageCar, string memory _plateNumber, uint256 _bookingPrice) external onlyOwner {
        uint256 carID = cars.length;
        Car storage newCar = cars[carID];
        newCar.owner = payable(msg.sender);
        newCar.model = _model;
        newCar.image = _imageCar;
        newCar.plateNumber = _plateNumber;
        newCar.bookingPrice = _bookingPrice;

        emit CarAdded(carID, msg.sender, _model, _plateNumber);
    }

    function changeCarStatus(uint256 _carID, CarStatus _newStatus) external onlyAdmin {
        Car storage car = cars[_carID];
        require(car.carStatus != _newStatus, "Car is already in the requested status");

        car.carStatus = _newStatus;
        emit CarStatusChanged(_carID, _newStatus);
    }

    function addRent(uint256 _carID, string memory _name, string memory _destination) external whenNotPaused {
        Car storage car = cars[_carID];
        require(car.carStatus == CarStatus.ACCEPTED, "Car is not approved for usage");
        require(car.orderStatus == OrderStatus.OPEN, "Car is already on hire");

        Rent memory newRent = Rent({
            carID: _carID,
            carAddress: car.owner,
            bookingAccount: msg.sender,
            name: _name,
            destination: _destination,
            amount: car.bookingPrice,
            paid: false
        });

        car.orderStatus = OrderStatus.IN_PROGRESS;
        car.carRents.push(newRent);

        emit RentAdded(_carID, msg.sender, _name, _destination, car.bookingPrice);
    }

    function payRent(uint256 _carID) external whenNotPaused onlyCarOwner(_carID) {
        Car storage car = cars[_carID];
        Rent storage rent = car.carRents[car.carRents.length - 1];

        require(!rent.paid, "Rent is already paid");
        require(cUsdToken.transferFrom(msg.sender, address(this), rent.amount), "Transfer failed");

        rent.paid = true;
        car.orderStatus = OrderStatus.OPEN;

        emit RentPaid(_carID, msg.sender, rent.amount);
    }

    function getCar(uint256 _carID) external view returns (
        address owner,
        string memory model,
        string memory image,
        string memory plateNumber,
        uint256 bookingPrice,
        CarStatus carStatus,
        OrderStatus orderStatus
    ) {
        Car storage car = cars[_carID];
        return (
            car.owner,
            car.model,
            car.image,
            car.plateNumber,
            car.bookingPrice,
            car.carStatus,
            car.orderStatus
        );
    }

    function getRent(uint256 _carID, uint256 _rentIndex) external view returns (
        address carAddress,
        address bookingAccount,
        string memory name,
        string memory destination,
        uint256 amount,
        bool paid
    ) {
        Rent storage rent = cars[_carID].carRents[_rentIndex];
        return (
            rent.carAddress,
            rent.bookingAccount,
            rent.name,
            rent.destination,
            rent.amount,
            rent.paid
        );
    }
}
