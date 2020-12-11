//基础设置---基础参数
var _ispligindebug = true;

//eth单位
var _ethWei = Math.pow(10, 18);//不会改变
var _ethWeiShow = 1;//根据合约设置改变
var _usdtWei = Math.pow(10, 6);//不会改变
var _ettWei = Math.pow(10, 18);//不会改变
var _usdt_ett_Ratio = Math.pow(10, 12);//不会改变

//token合约地址/ABI
var _ContractAddress_USDT = null;
var _ContractABI_USDT = null;
var _ContractDecimals_USDT = null;
var _ContractAddress_ETT = null;
var _ContractABI_ETT = null;
var _ContractDecimals_ETT = null;

//合约地址
var _ContractAddress = null;
//合约ABI
var _ContractABI = null
//合约运行网络
//1：以太坊主网 https://cn.etherscan.com/
//3：Ropsten测试链 https://ropsten.etherscan.io/
//42：Kovan测试链 https://kovan.etherscan.io/
//4：Rinkeby测试链 https://rinkeby.etherscan.io/
//5：Goerli测试链 https://goerli.etherscan.io/
var _ContractRunNetwork = '1';//主网

//默认推荐码
var _ContractRecommendCode = '';
var _ContractInitAddr = '';

//余额显示精度
var _AccountDisplayPrecision = 6;
//合约显示精度——奖金数据等
var _ContractDisplayPrecision = 6;


//页面定义istest 网络环境
var _istest = _istest || 0
if (_istest) {
    //测试设置
    //_ethWeiShow = 0.01;//100倍测试
    _ContractRunNetwork = '3';//Ropsten测试链
    _ContractAddress = '0x6661E0142b2C559d34194FffC4A942596d32378F';
    _ContractABI = [{ "inputs": [{ "internalType": "address", "name": "_devAddr", "type": "address" }, { "internalType": "address", "name": "_USDTAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_type", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_USDT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_ETT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TakeBonusEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[14]", "name": "info", "type": "uint256[14]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement_Dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_type", "type": "uint8" }], "name": "takeBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
    _ContractRecommendCode = '';
    _ContractInitAddr = '';

    _ContractAddress_USDT = "0xB69B04d663839f19892a3b8E7cd236562469D62b";
    _ContractABI_USDT = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }];
    _ContractDecimals_USDT = 6;
    _ContractAddress_ETT = "0x6661E0142b2C559d34194FffC4A942596d32378F";
    _ContractABI_ETT = [{ "inputs": [{ "internalType": "address", "name": "_devAddr", "type": "address" }, { "internalType": "address", "name": "_USDTAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_type", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_USDT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_ETT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TakeBonusEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[14]", "name": "info", "type": "uint256[14]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement_Dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_type", "type": "uint8" }], "name": "takeBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
    _ContractDecimals_ETT = 18;
} else {
    //主网设置
    //_ContractRunNetwork = '1';//主网
    _ContractAddress = '0x556d9E146CC7Fe7DF93fBdd90347Af8930acb104';//填入主网合约地址
    _ContractABI = [{ "inputs": [{ "internalType": "address", "name": "_devAddr", "type": "address" }, { "internalType": "address", "name": "_USDTAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_type", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_USDT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_ETT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TakeBonusEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[14]", "name": "info", "type": "uint256[14]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement_Dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_type", "type": "uint8" }], "name": "takeBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
    _ContractRecommendCode = '';
    _ContractInitAddr = '';

    _ContractAddress_USDT = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    _ContractABI_USDT = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowed", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }]
    _ContractDecimals_USDT = 6;
    _ContractAddress_ETT = "0x556d9E146CC7Fe7DF93fBdd90347Af8930acb104";
    _ContractABI_ETT = [{ "inputs": [{ "internalType": "address", "name": "_devAddr", "type": "address" }, { "internalType": "address", "name": "_USDTAddr", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_code", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_rCode", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "InvestEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_addr", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_type", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_USDT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "_value_ETT", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "TakeBonusEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "_from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "_to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "address", "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_spender", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getUserByAddress", "outputs": [{ "internalType": "uint256[14]", "name": "info", "type": "uint256[14]" }, { "internalType": "address", "name": "code", "type": "address" }, { "internalType": "address", "name": "rCode", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "money", "type": "uint256" }, { "internalType": "address", "name": "rCode", "type": "address" }], "name": "invest", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "code", "type": "address" }], "name": "isUsedCode", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "settlement", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "settlement_Dev", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "stateView", "outputs": [{ "internalType": "uint256[8]", "name": "info", "type": "uint256[8]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint8", "name": "_type", "type": "uint8" }], "name": "takeBonus", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_from", "type": "address" }, { "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }];
    _ContractDecimals_ETT = 18;
}

//页面定义_isNotAuthorize 账户授权
var _isNotAuthorize = _isNotAuthorize

//基础插件参数
var _dappBaseOptions = {
    transaction: {
        Decimals: 18,//精度 转出金额扩大精度默认18位
        //ContractAddress: null,//ERC20合约地址
        //ContractABI:null,//RRC20代币合约ABI
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        window.msgtips && window.msgtips(msg)
    },
    initCallBack: function (e, defaultAccount, isEthereum, isNotFirst) {
        //初始化完成后回调/网络变更回调/账号变更回调
        _ispligindebug && console.log('2.BaseInit:' + defaultAccount)

        //在这里处理 账号余额信息
        typeof HandleUserInfo === "function" && HandleUserInfo(e, defaultAccount, isEthereum)
    },
    initHandleNetworkType: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log('1.NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        //在这里处理 网络相关信息
        typeof HandleNetworkType === "function" && HandleNetworkType(e, networkType, networkName, networkScan)
    },
    networkChangeEventCallBack: function (e, networkType, networkName, networkScan) {
        //1：以太坊主网 https://cn.etherscan.com/
        //3：Ropsten测试链 https://ropsten.etherscan.io/
        //42：Kovan测试链 https://kovan.etherscan.io/
        //4：Rinkeby测试链 https://rinkeby.etherscan.io/
        //5：Goerli测试链 https://goerli.etherscan.io/
        //网络变更后回调
        _ispligindebug && console.log('networkChanged: new Network: NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)
    },
    accountsChangedEventCallBack: function (e, defaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
    isAuthorize: !_isNotAuthorize,//启用授权
    defaultNetwork: _ContractRunNetwork,//默认网络
}
//合约插件参数
var _dappContractOptions = {
    contract: {
        ContractAddress: _ContractAddress,//合约地址
        //合约ABI
        ContractABI: _ContractABI,
    },
    msgTips: function (msg) {
        //定义消息处理
        //alert(msg)
        window.msgtips && window.msgtips(msg)
    },
    initCallBack: function (e, networkType, networkName, networkScan) {
        //初始化完成后回调/网络变更回调
        _ispligindebug && console.log("3.ContractTnit: Contract init succeed! " + 'NetworkType:' + networkType + ', NetworkName:' + networkName + ', NetworkScan:' + networkScan)

        e.getContractLink(null, function (contractLink) {
            var contractAddress = e.getContractAddress();

            //在这里处理 合约基础信息
            typeof HandleContractBaseInfo === "function" && HandleContractBaseInfo(e, networkType, contractLink, contractAddress)
        });
    },
    initAuthorizeCallBack: function (e, defaultAccount, isAuthorize) {
        //初始化完成后授权回调/网络变更回调/账号变更回调
        _ispligindebug && console.log("4.AuthorizeCallBack:" + isAuthorize + ",defaultAccount" + defaultAccount)

        //在这里处理 合约账号信息
        e.getNetworkType(function (networkType) {
            typeof HandleContractUserInfo === "function" && HandleContractUserInfo(e, isAuthorize, networkType, defaultAccount)
        })
    },
    accountsChangedEventCallBack: function (e, defaultAccount, isShowdefaultAccount) {
        //账号变更事件
        _ispligindebug && console.log('accountsChangedEvent: new accounts:' + defaultAccount)
    },
}

//-----------------------------------------------------------

//初始化插件---创建自定义插件
var _DappContractPlugin = InitDappContract(_dappContractOptions, _dappBaseOptions);

//-----------------------------------------------------------
//定义显示数据刷新触发事件
var HandleShowChangeLoad;
//定义显示数据方法
var HandleShowContractInfo;

var HandleShowContractUserInfo;

//定义处理代币授权方法
var HandleShowTokenApproveLoad;
//定义处理交易提示提示方法
var HandleShowTransactionProcessingLoad;

//初始化插件处理事件---初始化相关处理
//处理网络相关 优先级1
var HandleNetworkType = function (e, networkType, networkName, networkScan) {
    //e 为DappBase基础对象

    //显示合约运行网络名称
    var showContractRunNetworkName = _ContractRunNetwork != 1 ? e._getNetworkName(_ContractRunNetwork) + '网络' : '主网';
    $('.data-networkFullName').html(showContractRunNetworkName)

    if (networkType == _ContractRunNetwork) {
        //显示投资按钮
        $('.data-contractNetworkNormal').show()
        $('.data-switchNetwork').hide()
    } else {
        //运行网限制
        //显示切换网络
        $('.data-contractNetworkNormal').hide()
        $('.data-switchNetwork').show()

        //提示
        var msgtipsswitchNetwork = "合约运行在 " + showContractRunNetworkName + ' 请切换为 ' + showContractRunNetworkName
        window.msgtips3 && window.msgtips3(msgtipsswitchNetwork);
    }

    //显示当前网络名称
    $('.data-networkName').html(networkName + ' Net')
    //设置当前网络区块浏览器链接
    $('.data-networkScan').attr('href', networkScan)
}

//处理账号余额信息 优先级2
var HandleUserInfo = function (e, defaultAccount, isEthereum, isShowdefaultAccount) {
    //e 为DappBase基础对象
    if (!isEthereum) {
        //显示安装兼容钱包
        $('.data-installationSupport').show()
    } else {
        $('.data-installationSupport').hide()
    }

    //初始化显示
    $('.data-balance').html("--")
    $('.data-defaultAccount').html("--").val('')

    if (defaultAccount) {
        $('.data-defaultAccount').html(defaultAccount).val(defaultAccount)

        //设置账户地址区块浏览器链接
        e.getAccountLink(defaultAccount, function (accountLink) {
            $('.data-accountLink').attr('href', accountLink)
        })

        //初始化显示
        //显示当前账号余额
        e.getBalance(function (_balance) {
            _ispligindebug && console.log('2.1.HandleUserInfo:' + _balance)

            $('.data-balance').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount)

        //获取usdt代币余额
        e.getTokenBalance(function (_balance) {
            $('.data-balance-usdt').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount, _ContractAddress_USDT, _ContractABI_USDT, _ContractDecimals_USDT)

        //获取ett代币余额
        e.getTokenBalance(function (_balance) {
            $('.data-balance-ett').html(_balance.toFloor(_AccountDisplayPrecision))
        }, defaultAccount, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT)

        //提示显示当前账号
        isShowdefaultAccount && window.msgtips2 && window.msgtips2(defaultAccount, '当前账户');
    }
}

//处理合约基础信息 优先级3
var HandleContractBaseInfo = function (e, networkType, contractLink, contractAddress) {
    //e 为DappContract对象

    HandleShowChangeLoad && HandleShowChangeLoad()

    _ispligindebug && console.log('3.1.HandleUserInfo:' + contractLink);

    //设置合约区块浏览器验证地址链接
    $('.data-contractLink').attr('href', contractLink)

    //初始化显示
    $('.ett-price-data2').html("--"); //ETT价格

    //合约运行网络一致
    if (networkType == _ContractRunNetwork) {
        //显示合约状态-页面中间
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                $('.ett-price-data2').html("1".div(rdata[2]).mul(_usdt_ett_Ratio).toFixed(3));
                //赋值临时变量
                e.paramRatio = rdata[2].div(_usdt_ett_Ratio);
            }
        });
    }
}

//处理合约账号信息 优先级4
var HandleContractUserInfo = function (e, isAuthorize, networkType, defaultAccount) {
    //e 为DappContract对象

    //初始化显示
    $('.invest-time-data0-8').html("--");//质押时间
    $('.invest-bouns-data0-4').html("--");//质押效益
    $('.referrer-bouns-data0-5').html("--");//布道效益
    $('.unsettle-bouns').html("--");//未结算效益
    $('.cansettle-bouns').html("--");//可结算效益
    $('.uncashout-bouns-data0-12').html("--");//未转出效益
    $('.total-bouns').html("--");//总效益

    //鉴权成功且合约运行网络一致
    if (isAuthorize && networkType == _ContractRunNetwork) {
        //获取用户信息
        Dapp_getContractUserInfo(function (resulr, rdata) {
            if (resulr) {
                var tempUserInfoData = rdata;
               
                $('.uncashout-bouns-data0-12').html(tempUserInfoData[0][12].div(_usdtWei).toFloor(_ContractDisplayPrecision));//未转出效益
                $('.total-bouns').html(tempUserInfoData[0][10].add(tempUserInfoData[0][11]).div(_usdtWei).toFloor(_ContractDisplayPrecision));//总效益
                $('.data-contractUserInfo').data("investLevel", tempUserInfoData[0][7]);
                $('.data-contractUserInfo').data("investAmount", tempUserInfoData[0][3]);
                //$('.data-contractUserInfo').data("investLevel", '1');
                //$('.data-contractUserInfo').data("investAmount", '0');
                //资产页质押数据显示
                if (tempUserInfoData[0][3] > 0) {
                    var scaleByLevel = 0;
                    switch (tempUserInfoData[0][7]) {
                        case "1":
                            scaleByLevel = 10
                            break;
                        case "2":
                            scaleByLevel = 12
                            break;
                        case "3":
                            scaleByLevel = 15
                            break;
                        case "4":
                            scaleByLevel = 15
                            break;
                        default:
                    }
                    var settlementNumber_base = new Date().getTime().toString().div(1000).sub(tempUserInfoData[0][9]).div(86400).toFloor(0);
                    //var settlementNumber_base = new Date().getTime().toString().div(1000).sub(tempUserInfoData[0][9]).div(600).toFloor(0);
                    var moneyBonus_base = tempUserInfoData[0][3].mul(scaleByLevel).div(1000);
                    var settlementNumber = settlementNumber_base;
                    var settlementMaxMoney = 0;
                    if (Number(tempUserInfoData[0][3].mul(tempUserInfoData[0][6]).div(10)) >= Number(tempUserInfoData[0][4].add(tempUserInfoData[0][5]))) {
                        settlementMaxMoney = tempUserInfoData[0][3].mul(tempUserInfoData[0][6]).div(10).sub(tempUserInfoData[0][4].add(tempUserInfoData[0][5]))
                    }
                    var moneyBonus = 0;
                    if (Number(moneyBonus_base.mul(settlementNumber)) > Number(settlementMaxMoney)) {
                        settlementNumber = settlementMaxMoney.div(moneyBonus_base).toFloor(0);
                        if (Number(moneyBonus_base.mul(settlementNumber)) < Number(settlementMaxMoney)) {
                            settlementNumber.add(1);
                        }
                        if (Number(settlementNumber) > Number(settlementNumber_base)) {
                            settlementNumber = settlementNumber_base;
                        }
                        moneyBonus = settlementMaxMoney;
                    } else {
                        moneyBonus = moneyBonus_base.mul(settlementNumber);
                    }
                    $('.invest-time-data0-8').html(tempUserInfoData[0][8].mul(1000).dateFormat('yyyy-MM-dd HH:mm:ss'));//质押时间
                    $('.invest-bouns-data0-4').html(tempUserInfoData[0][4].add(moneyBonus).div(_usdtWei).toFloor(_ContractDisplayPrecision));//质押效益
                    $('.referrer-bouns-data0-5').html(tempUserInfoData[0][5].div(_usdtWei).toFloor(_ContractDisplayPrecision));//布道效益
                    $('.unsettle-bouns').html(moneyBonus.div(_usdtWei).toFloor(_ContractDisplayPrecision));//未结算效益
                    $('.cansettle-bouns').html(settlementMaxMoney.div(_usdtWei).toFloor(_ContractDisplayPrecision));//可结算效益
                } else {
                    $('.invest-bouns-data0-4').html("0.00");//质押效益
                    $('.referrer-bouns-data0-5').html("0.00");//布道效益
                    $('.unsettle-bouns').html("0.00");//未结算效益
                    $('.cansettle-bouns').html("0.00");//可结算效益
                }
                HandleShowContractUserInfo && HandleShowContractUserInfo();
            }
        });
    }
}

//-----------------------------------------------------------

//合约方法---ABI 交互实现-----Token 操作
//获取代币授权操作信息
function Token_getAllowance(cb, oaddr, spender, taddr, tABI, decimals) {
    try {
        if (oaddr) {
            _DappContractPlugin.getContractObj(function (_ContractObj) {
                _ContractObj.methods
                  .allowance(oaddr, spender)
                  .call()
                  .then(function (rdata) {
                      //回调处理
                      typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                  })
            }, taddr, tABI);
        } else {
            _DappContractPlugin.getCurrentAccount(function (_oaddr) {
                _DappContractPlugin.getContractObj(function (_ContractObj) {
                    _ContractObj.methods
                        .allowance(_oaddr, spender)
                        .call()
                        .then(function (rdata) {
                            //回调处理
                            typeof cb === "function" && cb(true, rdata.div(Math.pow(10, decimals)))
                        })
                }, taddr, tABI);
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//代币授权操作
function Token_approve(cb, receiptCB, amount, spender, taddr, tABI, decimals) {
    try {
        _DappContractPlugin.getContractObj(function (_ContractObj) {
            _ContractObj.methods
            .approve(spender, amount.mul(Math.pow(10, decimals)))
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                typeof cb === "function" && cb(true, rdata)

                //监听到账
                _DappContractPlugin.DappBaseObj.checkTransactionReceipt(rdata, function (receipt) {
                    console.log(receipt);
                    //完成回调
                    typeof receiptCB === "function" && receiptCB(receipt)
                })
            })
            .on('error', function (err) {
                console.log(err)
                if (err && err.code) {
                    typeof cb === "function" && cb(false, err)
                }
            })
            //.on('confirmation', function (confirmationNumber, receipt) {
            //    console.log('confirmation: ' + confirmationNumber);
            //})
            //.on('receipt', function (receipt) {
            //    console.log(receipt);
            //    //完成回调
            //    typeof receiptCB === "function" && receiptCB(receipt)
            //});
        }, taddr, tABI);
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//合约方法---ABI 交互实现
//获取合约信息
function Dapp_getContractState(cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .stateView()
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//获取用户合约信息
function Dapp_getContractUserInfo(cb, addr) {
    try {
        if (addr) {
            _DappContractPlugin.ContractObj.methods
                .getUserByAddress(addr)
                .call()
                .then(function (rdata) {
                    //回调处理
                    typeof cb === "function" && cb(true, rdata)
                })
        } else {
            _DappContractPlugin.getCurrentAccount(function (_addr) {
                _DappContractPlugin.ContractObj.methods
                    .getUserByAddress(_addr)
                    .call()
                    .then(function (rdata) {
                        //回调处理
                        typeof cb === "function" && cb(true, rdata)
                    })
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}
//检查注册码是否被使用
function Dapp_isUsedCode(code, cb) {
    try {
        _DappContractPlugin.ContractObj.methods
            .isUsedCode(code)
            .call()
            .then(function (rdata) {
                //回调处理
                typeof cb === "function" && cb(true, rdata)
            })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//结算
function Dapp_settlement(cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true);
        _DappContractPlugin.ContractObj.methods
            .settlement()
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata);
                //回调处理
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                typeof cb === "function" && cb(true, rdata);

                //监听到账
                _DappContractPlugin.DappBaseObj.checkTransactionReceipt(rdata, function (receipt) {
                    console.log(receipt);
                    //完成回调
                    //完成刷新会员信息
                    //直接调用账户变更事件进行更新页面数据
                    _DappContractPlugin.getNetworkType(function (networkType) {
                        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                    })
                })
            })
            .on('error', function (err) {
                console.log(err);
                if (err && err.code) {
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(false, err);
                }
            })
            //.on('confirmation', function (confirmationNumber, receipt) {
            //    console.log('confirmation: ' + confirmationNumber);
            //})
            //.on('receipt', function (receipt) {
            //    console.log(receipt);
            //    //完成刷新会员信息
            //    //直接调用账户变更事件进行更新页面数据
            //    _DappContractPlugin.getNetworkType(function (networkType) {
            //        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
            //    })
            //});
    } catch (e) {
        console.log(e);
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
        typeof cb === "function" && cb(false, e.message || e);
    }
}

//投资
function Dapp_invest(money, code, rCode, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true);
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (!code) {
            throw { cede: 401, message: "请输入邀请码" }
        }
        if (!rCode) {
            throw { cede: 401, message: "请输入推荐码" }
        }
        if (rCode == 'rCode') {
            rCode = '';
        }

        var money = money.mul(_usdtWei);
        var _to = _DappContractPlugin.getContractAddress();

        _DappContractPlugin.getCurrentAccount(function (_from) {
            var params = {
                to: _to,
                from: _from,
                value: 0,
            };

            _DappContractPlugin.ContractObj.methods
                .invest(money, rCode)
                .send(params)
                .on('transactionHash', function (rdata) {
                    console.log(rdata);
                    //回调处理
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                    typeof cb === "function" && cb(true, rdata);

                    //监听到账
                    _DappContractPlugin.DappBaseObj.checkTransactionReceipt(rdata, function (receipt) {
                        console.log(receipt);
                        //完成回调
                        //完成刷新会员信息
                        //直接调用账户变更事件进行更新页面数据
                        _DappContractPlugin.getNetworkType(function (networkType) {
                            _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                        })
                    })
                })
                .on('error', function (err) {
                    console.log(err);
                    if (err && err.code) {
                        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
                        typeof cb === "function" && cb(false, err);
                    }
                })
                //.on('confirmation', function (confirmationNumber, receipt) {
                //    console.log('confirmation: ' + confirmationNumber);
                //})
                //.on('receipt', function (receipt) {
                //    console.log(receipt);
                //    //完成刷新会员信息
                //    //直接调用账户变更事件进行更新页面数据
                //    _DappContractPlugin.getNetworkType(function (networkType) {
                //        _DappContractPlugin.DappBaseObj._networkChangedEvent(networkType);
                //    })
                //});
        })
    } catch (e) {
        console.log(e);
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false);
        typeof cb === "function" && cb(false, e.message || e);
    }
}

//提现
function Dapp_takeBonus(_type, cb) {
    try {
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(true)
        _DappContractPlugin.ContractObj.methods
            .takeBonus(_type)
            .send()
            .on('transactionHash', function (rdata) {
                console.log(rdata)
                //回调处理
                HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                typeof cb === "function" && cb(true, rdata)

                //监听到账
                _DappContractPlugin.DappBaseObj.checkTransactionReceipt(rdata, function (receipt) {
                    console.log(receipt);
                    //完成回调
                    //完成刷新会员信息
                    //直接调用账户变更事件进行更新页面数据
                    _DappContractPlugin.getCurrentAccount(function (_from) {
                        _DappContractPlugin.DappBaseObj._accountsChangedEvent(_from)
                        _DappContractPlugin._accountsChangedEvent(_from)
                    })
                })
            })
            .on('error', function (err) {
                console.log(err)
                if (err && err.code) {
                    HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
                    typeof cb === "function" && cb(false, err)
                }
            })
            //.on('confirmation', function (confirmationNumber, receipt) {
            //    console.log('confirmation: ' + confirmationNumber);
            //})
            //.on('receipt', function (receipt) {
            //    console.log(receipt);
            //    //完成刷新会员信息
            //    //直接调用账户变更事件进行更新页面数据
            //    _DappContractPlugin.getCurrentAccount(function (_from) {
            //        _DappContractPlugin.DappBaseObj._accountsChangedEvent(_from)
            //        _DappContractPlugin._accountsChangedEvent(_from)
            //    })
            //});
    } catch (e) {
        console.log(e)
        HandleShowTransactionProcessingLoad && HandleShowTransactionProcessingLoad(false)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//-----------------------------------------------------------

//业务相关方法---基础方法实现
//随机生成字符串
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz123456789';
    //var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}
//获取rul参数
function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=(.*)(&[^&=]+=)');
    var regLast = new RegExp('(^|&)' + name + '=(.*)($)');
    var rtest = window.location.href.replace(/\/\#/, '');
    rtest = rtest && rtest.match(/\?.+/) && rtest.match(/\?.+/)[0];
    rtest = rtest && (rtest.substr(1).match(reg) || rtest.substr(1).match(regLast));
    if (rtest) {
        var l = rtest[2].match(/&[^&=]+=/)
        if (l) {
            return decodeURIComponent(rtest[2].split(l[0])[0]);
        } else return decodeURIComponent(rtest[2]);
    }
    return null;
}
//任务检查
function checktaskObj() {
    this.coutnc = 1;
    this.crrc = 0;
    this.cancel = false;

    this.check = function (cb) {
        if (this.crrc >= this.coutnc && !this.cancel) {
            typeof cb === "function" && cb(true)
        } else {
            typeof cb === "function" && cb(false)
        }
    }
}

//-----------------------------------------------------------

//合约方法业务方法---业务逻辑实现
//检查代币授权
function business_checkApprove(amount, taddr, tABI, decimals, isERC777, cb) {
    amount = amount.mul(Math.pow(10, decimals)).toFloor(0).div(Math.pow(10, decimals))
    _DappContractPlugin.DappBaseObj.getTokenBalance(function (_balance) {
        if (Number(_balance) >= Number(amount)) {
            Token_getAllowance(function (resulr, rdata) {
                if (resulr) {
                    if (Number(rdata) >= Number(amount)) {
                        //回调处理
                        typeof cb === "function" && cb(true)
                    } else {
                        var checktask = new checktaskObj();
                        //重新授权
                        if (Number(rdata) > 0 && !isERC777) {
                            checktask.coutnc = 2;
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false, 1001, rdata)
                                    console.log("r1 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt1 approve：" + taddr)
                                checktask.crrc++;
                                Token_approve(function (resulr, rdata) {
                                    if (!resulr) {
                                        typeof cb === "function" && cb(false, 1001, rdata)
                                        console.log("r2 approve ERR：" + taddr)
                                        checktask.cancel = true;
                                    }
                                }, function () {
                                    console.log("receipt2 approve：" + taddr)
                                    checktask.crrc++;
                                    checktask.check(function (checkresult) {
                                        if (checkresult) {
                                            typeof cb === "function" && cb(true)
                                        }
                                    })
                                }, amount, _ContractAddress, taddr, tABI, decimals)
                            }, "0", _ContractAddress, taddr, tABI, decimals)
                        } else {
                            Token_approve(function (resulr, rdata) {
                                if (!resulr) {
                                    typeof cb === "function" && cb(false, 1001, rdata)
                                    console.log("r2 approve ERR：" + taddr)
                                    checktask.cancel = true;
                                }
                            }, function () {
                                console.log("receipt2 approve：" + taddr)
                                checktask.crrc++;
                                checktask.check(function (checkresult) {
                                    if (checkresult) {
                                        typeof cb === "function" && cb(true)
                                    }
                                })
                            }, amount, _ContractAddress, taddr, tABI, decimals)
                        }
                    }
                } else {
                    console.log("check approve ERR：" + taddr)
                    typeof cb === "function" && cb(false, 1000, "获取授权金额失败")
                }
            }, null, _ContractAddress, taddr, tABI, decimals)
        } else {
            typeof cb === "function" && cb(false, 1002, "余额不足")
        }
    }, null, taddr, tABI, decimals)
}

//获取当前用户注册/邀请码
function business_getCurrentAccountCode(cb, addr) {
    Dapp_getContractUserInfo(function (resulr, rdata) {
        var code;
        if (resulr) {
            //typeof cb === "function" && cb(rdata[1], false);
            if (rdata[0][0] != 0) {
                code = rdata[1]
                //回调处理
                typeof cb === "function" && cb(code, 2);
                return;
            } else {
                Dapp_getContractState(function (resulr, rdata) {
                    if (resulr) {
                        _DappContractPlugin.getCurrentAccount(function (_addr) {
                            code = _addr;
                            //直接回调，不验证
                            typeof cb === "function" && cb(code, Number(rdata[0]) == 0 ? 0 : 1);
                        })
                    }
                });
                return;
            }
        }
        //重新获取注册码
        business_afreshAccountCode(cb)
    }, addr)
}
//重新获取注册/邀请码
function business_afreshAccountCode(cb) {
    var newCode = '';
    //newCode = randomString(6);
    if (newCode) {
        Dapp_isUsedCode(newCode, function (resulr, rdata) {
            if (resulr) {
                if (!rdata) {
                    //回调处理
                    typeof cb === "function" && cb(newCode, true)
                } else {
                    business_afreshAccountCode(cb)
                }
            } else {
                console.log("check newCode ERR")
            }
        })
    } else {
        _DappContractPlugin.getCurrentAccount(function (_addr) {
            newCode = _addr;
            //直接回调，不验证
            typeof cb === "function" && cb(newCode, false)
        })
    }
}
//获取默认推荐码
function business_getDefaultRecommendCode() {
    return _ContractRecommendCode;
}
function business_getDefaultRecommendCodeInit() {
    //return 'rCode';
    return '0x0000000000000000000000000000000000000000';
}
//获取推荐码
function business_getRecommendCode(cb, r) {
    var rCode;
    //优先根据已注册的属性获取
    Dapp_getContractUserInfo(function (resulr, rdata) {
        if (resulr) {
            var uid = rdata[0][0]
            if (uid != 0) {
                rCode = rdata[2]
                //回调处理
                typeof cb === "function" && cb(rCode, uid)
                return;
            }
        }
        //获取浏览器参数
        rCode = getUrlParam('rCode')
        if (rCode) {
            //回调处理
            typeof cb === "function" && cb(rCode, -1)
            return;
        }
        if (rCode) {
            if (!r) {
                //检查邀请码是否正确
                Dapp_isUsedCode(rCode, function (resulr, rdata) {
                    if (resulr) {
                        if (rdata) {
                            //回调处理
                            typeof cb === "function" && cb(rCode, -2)
                        } else {
                            //不正确的邀请码
                            business_getRecommendCode(cb, true);
                        }
                    } else {
                        console.log("check newCode ERR")
                    }
                })
            } else {
                //不正确的邀请码 尝试获取 默认
                rCode = business_getDefaultRecommendCode();
                typeof cb === "function" && cb(rCode, 0)
            }
        } else {
            //未注册未填写 尝试获取 默认
            rCode = business_getDefaultRecommendCode();
            typeof cb === "function" && cb(rCode, 0)
        }
    })
}

//获取门票价格
function business_ratioTicket(cb) {
    try {
        Dapp_getContractState(function (resulr, rdata) {
            if (resulr) {
                typeof cb === "function" && cb(true, rdata[0][2].div(_usdt_ett_Ratio))
            }
        })
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//质押投资
function business_invest(money, cb,code, rCode) {
    try {
        if (!money) {
            throw { cede: 401, message: "请输入金额" }
        }
        if (!(Number(money) == 100 || Number(money) == 500 || Number(money) == 1000 || Number(money) == 2000)) {
        //if (!(Number(money) == 10000 || Number(money) == 50000 || Number(money) == 100000 || Number(money) == 200000)) {
            throw { cede: 401, message: "金额不正确" }
        }

        if (code) {
            //已获取邀请码
            business_invest_r(money, cb, code, rCode)
        } else {
            //未获取邀请码
            business_getCurrentAccountCode(function (_code, isNweCode) {
                business_invest_r(money, cb, _code, rCode)
            })
        }
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
    //自定义函数处理
    function business_invest_r(money, cb, _code, rCode) {
        console.log(_code)
        if (rCode) {
            console.log(rCode)
            business_invest_s(money, cb, _code, rCode, -1)
        } else {
            business_getRecommendCode(function (_rCode, rtype) {
                console.log(_rCode)
                business_invest_s(money, cb, _code, _rCode, rtype)
            })
        }
    }

    function business_invest_s(money, cb, _code, rCode, rtype) {
        //地址处理
        _DappContractPlugin.DappBaseObj.getCurrentAccount(function (addr) {
            //投资限额判断
            Dapp_getContractState(function (resulr, rdata) {
                var _DCSdata = rdata;
                if (resulr) {
                    rCode = rCode || business_getDefaultRecommendCodeInit();
                    if (addr != _ContractInitAddr) {
                        if (rdata[0] != 0) {
                            if (rCode == 'rCode' && rtype != 1) {
                                typeof cb === "function" && cb(false, "请输入推荐码")
                                return;
                            }
                            if (rCode == '0x0000000000000000000000000000000000000000' && rtype != 1) {
                                typeof cb === "function" && cb(false, "请输入推荐人地址")
                                return;
                            }
                        }
                    }
                    if (addr != _ContractInitAddr) {
                        if (rtype < 0) {
                            //检查邀请码是否正确
                            Dapp_isUsedCode(rCode, function (resulr, rdata) {
                                if (resulr) {
                                    if (rdata) {
                                        //投资
                                        business_invest_t(money, cb, _code, rCode, _DCSdata)
                                        return;
                                    }
                                }
                                typeof cb === "function" && cb(false, "请输入正确的推荐码")
                            })
                        } else {
                            business_invest_t(money, cb, _code, rCode, _DCSdata)
                        }
                    }
                }
            })
        })
    }

    function business_invest_t(money, cb, _code, rCode, _DCSdata) {
        var money_Approve = money;
        if (Number(_DCSdata[5]) >= Number(_usdtWei.mul(500000))) {
            money_Approve = money.mul(70).div(100)
            var money_ETT = money.mul(30).div(100).mul(_usdtWei).mul(_DCSdata[2]).toFloor(0).div(_ettWei)
            //check ETT Balance
            _DappContractPlugin.DappBaseObj.getTokenBalance(function (_balance) {
                if (Number(_balance) >= Number(money_ETT)) {
                    business_invest_b(money, cb, _code, rCode, money_Approve)
                } else {
                    typeof cb === "function" && cb(false, "门票余额不足");
                }
            }, null, _ContractAddress_ETT, _ContractABI_ETT, _ContractDecimals_ETT)
        } else {
            business_invest_b(money, cb, _code, rCode, money_Approve)
        }
    }

    function business_invest_b(money, cb, _code, rCode, money_Approve) {
        HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(true);
        business_checkApprove(money_Approve, _ContractAddress_USDT, _ContractABI_USDT, _ContractDecimals_USDT, false, function (resulr, code, errmsg) {
            if (resulr) {
                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false);
                Dapp_invest(money, _code, rCode, cb);
            } else {
                HandleShowTokenApproveLoad && HandleShowTokenApproveLoad(false);
                //checktask.cancel = true;
                if (code == 1002) {
                    //typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code + ",msg:余额不足");
                    typeof cb === "function" && cb(false, "USDT余额不足");
                } else {
                    typeof cb === "function" && cb(false, "授权操作金额失败:USDT,code:" + code + ",msg:" + errmsg);
                }
            }
        })
    }
}

//收益结算
function business_settlement(cb) {
    try {
        Dapp_getContractUserInfo(function (resulr, rdata) {
            if (resulr) {                
                var tempUserInfoData = rdata;
                if (!Number(tempUserInfoData[0][3])) {
                    return;
                }
                var scaleByLevel = 0;
                switch (tempUserInfoData[0][7]) {
                    case "1":
                        scaleByLevel = 10
                        break;
                    case "2":
                        scaleByLevel = 12
                        break;
                    case "3":
                        scaleByLevel = 15
                        break;
                    case "4":
                        scaleByLevel = 15
                        break;
                    default:
                }
                var settlementNumber_base = new Date().getTime().toString().div(1000).sub(tempUserInfoData[0][9]).div(86400).toFloor(0);
                //var settlementNumber_base = new Date().getTime().toString().div(1000).sub(tempUserInfoData[0][9]).div(600).toFloor(0);
                var moneyBonus_base = tempUserInfoData[0][3].mul(scaleByLevel).div(1000);
                var settlementNumber = settlementNumber_base;
                var settlementMaxMoney = 0;
                if (Number(tempUserInfoData[0][3].mul(tempUserInfoData[0][6]).div(10)) >= Number(tempUserInfoData[0][4].add(tempUserInfoData[0][5]))) {
                    settlementMaxMoney = tempUserInfoData[0][3].mul(tempUserInfoData[0][6]).div(10).sub(tempUserInfoData[0][4].add(tempUserInfoData[0][5]))
                }
                var moneyBonus = 0;
                if (Number(moneyBonus_base.mul(settlementNumber)) > Number(settlementMaxMoney)) {
                    settlementNumber = settlementMaxMoney.div(moneyBonus_base).toFloor(0);
                    if (Number(moneyBonus_base.mul(settlementNumber)) < Number(settlementMaxMoney)) {
                        settlementNumber.add(1);
                    }
                    if (Number(settlementNumber) > Number(settlementNumber_base)) {
                        settlementNumber = settlementNumber_base;
                    }
                    moneyBonus = settlementMaxMoney;
                } else {
                    moneyBonus = moneyBonus_base.mul(settlementNumber);
                }
                if (!Number(moneyBonus)) {
                    return;
                }
                Dapp_settlement(cb);
            }
        });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

//收益结算
function business_takeBonus(_type, cb) {
    try {
        Dapp_getContractUserInfo(function (resulr, rdata) {
            if (resulr) {
                var tempUserInfoData = rdata;
                if (Number(tempUserInfoData[0][12]) > 0) {
                    Dapp_takeBonus(_type, cb);
                }
                else {
                    typeof cb === "function" && cb(false,"未转出余额不足！")
                }
            }
        });
    } catch (e) {
        console.log(e)
        typeof cb === "function" && cb(false, e.message || e)
    }
}

var _recordDataListObj = {}
function business_RecordDataList(key, HandleListcomplete, HandleCB, HandleCB2) {
    //重置
    _recordDataListObj[key] = [];

    var recordDataList = _recordDataListObj[key] || [];
    typeof HandleCB2 === "function" && HandleCB2(function (number, page) {
        for (var i = 0; i < number; i++) {
            recordDataList.push(Object.assign({}, {}));
            recordDataList[i].Index = i;
        }
        var size = number
        typeof HandleList === "function" && HandleList(page || 1, size, HandleListcomplete);
    }, key)

    function HandleList(page, size, cb) {
        var start = size * (page - 1);
        var end = size * page - 1;
        if (end > recordDataList.length - 1) {
            end = recordDataList.length - 1
        }
        //console.log("start:" + start + ",end:" + end)

        //循环遍历
        var asynchronous = end - start + 1;
        var complete = 0;
        for (var i = start; i <= end; i++) {
            //console.log(i)
            HandleCB && HandleCB(recordDataList[i].Index, function (_recordsData, index) {
                //console.log(_recordsData)
                recordDataList[index] = _recordsData;

                complete++
                //判断是否完成
                //console.log(asynchronous+","+complete)
                if (complete >= asynchronous) {
                    //处理完成
                    //console.log("ok")
                    typeof cb === "function" && cb(recordDataList, key);
                }
            }, i, key)
        }
    }
}