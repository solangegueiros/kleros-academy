/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import { Provider, TransactionRequest } from '@ethersproject/providers'
import type { AcademyClassType, AcademyClassInterface } from '../AcademyClassType'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addressStudentList',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'addressStudentQuiz',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'className_',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
    ],
    name: 'StudentAddedInClass',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_studentAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'enum StudentStatus',
        name: '_status',
        type: 'uint8',
      },
    ],
    name: 'StudentStatusChanged',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'active',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'className',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'getRoleMember',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleMemberCount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'open',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'studentList',
    outputs: [
      {
        internalType: 'contract iAcademyStudents',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'studentQuiz',
    outputs: [
      {
        internalType: 'contract iAcademyStudentQuiz',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'subscribe',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'addStudent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'courseComplete',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unsubscribe',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'cancelStudent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'quiz',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'answer',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'total',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'grade',
        type: 'uint8',
      },
    ],
    name: 'addQuizAnswer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'changeClassStatus',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'changeClassOpen',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'isStudent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getStudentByAddress',
    outputs: [
      {
        components: [
          {
            internalType: 'enum StudentStatus',
            name: 'status',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'start',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'end',
            type: 'uint256',
          },
        ],
        internalType: 'struct StudentInClass',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'listStudentsByAddress',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'countStudents',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
]

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162003250380380620032508339818101604052810190620000379190620003f3565b6200004c6000801b336200012460201b60201c565b806002908051906020019062000064929190620002ba565b5060018060006101000a81548160ff02191690831515021790555060018060016101000a81548160ff02191690831515021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000620565b6200013682826200013a60201b60201c565b5050565b6200016881600080858152602001908152602001600020600001620001dd60201b620010681790919060201c565b15620001d9576200017e6200021560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006200020d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200021d60201b60201c565b905092915050565b600033905090565b60006200023183836200029760201b60201c565b6200028c57826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000291565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054620002c8906200052b565b90600052602060002090601f016020900481019282620002ec576000855562000338565b82601f106200030757805160ff191683800117855562000338565b8280016001018555821562000338579182015b82811115620003375782518255916020019190600101906200031a565b5b5090506200034791906200034b565b5090565b5b80821115620003665760008160009055506001016200034c565b5090565b6000620003816200037b846200048b565b62000462565b9050828152602081018484840111156200039a57600080fd5b620003a7848285620004f5565b509392505050565b600081519050620003c08162000606565b92915050565b600082601f830112620003d857600080fd5b8151620003ea8482602086016200036a565b91505092915050565b6000806000606084860312156200040957600080fd5b60006200041986828701620003af565b93505060206200042c86828701620003af565b925050604084015167ffffffffffffffff8111156200044a57600080fd5b6200045886828701620003c6565b9150509250925092565b60006200046e62000481565b90506200047c828262000561565b919050565b6000604051905090565b600067ffffffffffffffff821115620004a957620004a8620005c6565b5b620004b482620005f5565b9050602081019050919050565b6000620004ce82620004d5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b8381101562000515578082015181840152602081019050620004f8565b8381111562000525576000848401525b50505050565b600060028204905060018216806200054457607f821691505b602082108114156200055b576200055a62000597565b5b50919050565b6200056c82620005f5565b810181811067ffffffffffffffff821117156200058e576200058d620005c6565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200061181620004c1565b81146200061d57600080fd5b50565b612c2080620006306000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80639010d07c116100de578063ca15c87311610097578063d547741f11610071578063d547741f1461049d578063fcae4484146104b9578063fcfff16f146104d7578063ff2e2795146104f557610172565b8063ca15c8731461041f578063cceabd331461044f578063d43e001a1461047f57610172565b80639010d07c1461031157806391d14854146103415780639aa8e722146103715780639f3da5cc146103a1578063a217fddf146103d1578063bd06ea19146103ef57610172565b80633ca9d3e9116101305780633ca9d3e9146102395780634114458414610257578063477f5a6914610275578063733d09d21461029357806382f7d392146102c35780638f449a05146102f357610172565b8062c51f8c1461017757806302fb0c5e14610195578063035410f6146101b3578063248a9ca3146101d15780632f2ff15d1461020157806336568abe1461021d575b600080fd5b61017f610513565b60405161018c919061236e565b60405180910390f35b61019d6105a1565b6040516101aa91906122e7565b60405180910390f35b6101bb6105b4565b6040516101c891906122c5565b60405180910390f35b6101eb60048036038101906101e69190611d89565b610642565b6040516101f89190612302565b60405180910390f35b61021b60048036038101906102169190611db2565b610661565b005b61023760048036038101906102329190611db2565b6106d4565b005b610241610757565b60405161024e91906122e7565b60405180910390f35b61025f6107df565b60405161026c919061231d565b60405180910390f35b61027d610805565b60405161028a919061252b565b60405180910390f35b6102ad60048036038101906102a89190611d37565b610812565b6040516102ba91906122e7565b60405180910390f35b6102dd60048036038101906102d89190611d37565b610a27565b6040516102ea91906122e7565b60405180910390f35b6102fb610a86565b60405161030891906122e7565b60405180910390f35b61032b60048036038101906103269190611dee565b610ae6565b6040516103389190612220565b60405180910390f35b61035b60048036038101906103569190611db2565b610b17565b60405161036891906122e7565b60405180910390f35b61038b60048036038101906103869190611d37565b610b48565b60405161039891906122e7565b60405180910390f35b6103bb60048036038101906103b69190611d37565b610ba8565b6040516103c89190612510565b60405180910390f35b6103d9610ce4565b6040516103e69190612302565b60405180910390f35b61040960048036038101906104049190611d37565b610ceb565b60405161041691906122e7565b60405180910390f35b61043960048036038101906104349190611d89565b610d9b565b604051610446919061252b565b60405180910390f35b61046960048036038101906104649190611e2a565b610dc1565b604051610476919061252b565b60405180910390f35b610487610f1f565b6040516104949190612338565b60405180910390f35b6104b760048036038101906104b29190611db2565b610f45565b005b6104c1610fb8565b6040516104ce91906122e7565b60405180910390f35b6104df610fca565b6040516104ec91906122e7565b60405180910390f35b6104fd610fdb565b60405161050a91906122e7565b60405180910390f35b6002805461052090612789565b80601f016020809104026020016040519081016040528092919081815260200182805461054c90612789565b80156105995780601f1061056e57610100808354040283529160200191610599565b820191906000526020600020905b81548152906001019060200180831161057c57829003601f168201915b505050505081565b600160009054906101000a900460ff1681565b6060600680548060200260200160405190810160405280929190818152602001828054801561063857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116105ee575b5050505050905090565b6000806000838152602001908152602001600020600201549050919050565b61068760008084815260200190815260200160002060020154610682611098565b610b17565b6106c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bd906123b0565b60405180910390fd5b6106d082826110a0565b5050565b6106dc611098565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610749576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610740906124f0565b60405180910390fd5b6107538282611133565b5050565b60006107666000801b33610b17565b6107a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079c90612430565b60405180910390fd5b60018054906101000a900460ff16156001806101000a81548160ff02191690831515021790555060018054906101000a900460ff16905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600680549050905090565b60006108216000801b33610b17565b610860576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085790612430565b60405180910390fd5b600160009054906101000a900460ff166108af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108a690612410565b60405180910390fd5b6108b882610a27565b6108f7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ee90612450565b60405180910390fd5b6002600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff02191690836002811115610983577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555042600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508173ffffffffffffffffffffffffffffffffffffffff167ffcac4ad276b3d596f594dd2e15d40999195593dfd3631982e5d8f03e9b62042b6002604051610a169190612353565b60405180910390a260019050919050565b600080600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101541115610a7c5760019050610a81565b600090505b919050565b600060018054906101000a900460ff16610ad5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acc90612490565b60405180910390fd5b610ade336111c6565b506001905090565b6000610b0f826000808681526020019081526020016000206000016116e090919063ffffffff16565b905092915050565b6000610b40826000808681526020019081526020016000206000016116fa90919063ffffffff16565b905092915050565b6000610b576000801b33610b17565b610b96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8d90612430565b60405180910390fd5b610b9f8261172a565b60019050919050565b610bb0611bf8565b610bb982610a27565b610bf8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bef906123f0565b60405180910390fd5b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820160009054906101000a900460ff166002811115610c8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6002811115610cc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8152602001600182015481526020016002820154815250509050919050565b6000801b81565b6000610cfa6000801b33610b17565b610d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3090612430565b60405180910390fd5b600160009054906101000a900460ff16610d88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7f90612410565b60405180910390fd5b610d91826111c6565b5060019050919050565b6000610dba6000808481526020019081526020016000206000016118eb565b9050919050565b6000600160009054906101000a900460ff16610e12576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e0990612410565b60405180910390fd5b610e1b33610a27565b610e5a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5190612450565b60405180910390fd5b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef58d59c33888888886040518663ffffffff1660e01b8152600401610ebf959493929190612264565b602060405180830381600087803b158015610ed957600080fd5b505af1158015610eed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f119190611ebd565b905080915050949350505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610f6b60008084815260200190815260200160002060020154610f66611098565b610b17565b610faa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fa190612470565b60405180910390fd5b610fb48282611133565b5050565b6000610fc33361172a565b6001905090565b60018054906101000a900460ff1681565b6000610fea6000801b33610b17565b611029576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161102090612430565b60405180910390fd5b600160009054906101000a900460ff1615600160006101000a81548160ff021916908315150217905550600160009054906101000a900460ff16905090565b6000611090836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611900565b905092915050565b600033905090565b6110c78160008085815260200190815260200160002060000161106890919063ffffffff16565b1561112f576110d4611098565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b61115a8160008085815260200190815260200160002060000161197090919063ffffffff16565b156111c257611167611098565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006111d182610a27565b15611211576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611208906124d0565b60405180910390fd5b60006001600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083600281111561129f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555042600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055506006839080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166382f7d392846040518263ffffffff1660e01b81526004016113a99190612220565b60206040518083038186803b1580156113c157600080fd5b505afa1580156113d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f99190611d60565b6114b157600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bd06ea19846040518263ffffffff1660e01b81526004016114589190612220565b602060405180830381600087803b15801561147257600080fd5b505af1158015611486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114aa9190611ebd565b90506114b2565b5b6000309050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636cd3fedf85836040518363ffffffff1660e01b815260040161151492919061223b565b602060405180830381600087803b15801561152e57600080fd5b505af1158015611542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115669190611d60565b6115a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159c906124b0565b60405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630c78a97485836040518363ffffffff1660e01b815260040161160292919061223b565b602060405180830381600087803b15801561161c57600080fd5b505af1158015611630573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116549190611d60565b611693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161168a906123d0565b60405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff167fc2cd73f6970f5e40dce13d5b14924b73bf1a89d678b30618a3135716213a2c6560405160405180910390a28192505050919050565b60006116ef83600001836119a0565b60001c905092915050565b6000611722836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611a3a565b905092915050565b600160009054906101000a900460ff16611779576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177090612410565b60405180910390fd5b61178281610a27565b6117c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117b890612450565b60405180910390fd5b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160006101000a81548160ff0219169083600281111561184d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555042600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600201819055508073ffffffffffffffffffffffffffffffffffffffff167ffcac4ad276b3d596f594dd2e15d40999195593dfd3631982e5d8f03e9b62042b60006040516118e09190612353565b60405180910390a250565b60006118f982600001611a5d565b9050919050565b600061190c8383611a3a565b61196557826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061196a565b600090505b92915050565b6000611998836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611a6e565b905092915050565b6000818360000180549050116119eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119e290612390565b60405180910390fd5b826000018281548110611a27577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b60008083600101600084815260200190815260200160002054905060008114611bec576000600182611aa09190612647565b9050600060018660000180549050611ab89190612647565b90506000866000018281548110611af8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080876000018481548110611b42577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200181905550600183611b5d91906125f1565b8760010160008381526020019081526020016000208190555086600001805480611bb0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050611bf2565b60009150505b92915050565b604051806060016040528060006002811115611c3d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815260200160008152602001600081525090565b6000611c64611c5f8461256b565b612546565b905082815260208101848484011115611c7c57600080fd5b611c87848285612747565b509392505050565b600081359050611c9e81612b77565b92915050565b600081519050611cb381612b8e565b92915050565b600081359050611cc881612ba5565b92915050565b600082601f830112611cdf57600080fd5b8135611cef848260208601611c51565b91505092915050565b600081359050611d0781612bbc565b92915050565b600081519050611d1c81612bbc565b92915050565b600081359050611d3181612bd3565b92915050565b600060208284031215611d4957600080fd5b6000611d5784828501611c8f565b91505092915050565b600060208284031215611d7257600080fd5b6000611d8084828501611ca4565b91505092915050565b600060208284031215611d9b57600080fd5b6000611da984828501611cb9565b91505092915050565b60008060408385031215611dc557600080fd5b6000611dd385828601611cb9565b9250506020611de485828601611c8f565b9150509250929050565b60008060408385031215611e0157600080fd5b6000611e0f85828601611cb9565b9250506020611e2085828601611cf8565b9150509250929050565b60008060008060808587031215611e4057600080fd5b600085013567ffffffffffffffff811115611e5a57600080fd5b611e6687828801611cce565b945050602085013567ffffffffffffffff811115611e8357600080fd5b611e8f87828801611cce565b9350506040611ea087828801611d22565b9250506060611eb187828801611d22565b91505092959194509250565b600060208284031215611ecf57600080fd5b6000611edd84828501611d0d565b91505092915050565b6000611ef28383611efe565b60208301905092915050565b611f078161267b565b82525050565b611f168161267b565b82525050565b6000611f27826125ac565b611f3181856125cf565b9350611f3c8361259c565b8060005b83811015611f6d578151611f548882611ee6565b9750611f5f836125c2565b925050600181019050611f40565b5085935050505092915050565b611f838161268d565b82525050565b611f9281612699565b82525050565b611fa1816126ed565b82525050565b611fb081612711565b82525050565b611fbf81612735565b82525050565b611fce81612735565b82525050565b6000611fdf826125b7565b611fe981856125e0565b9350611ff9818560208601612756565b612002816128a8565b840191505092915050565b600061201a6022836125e0565b9150612025826128b9565b604082019050919050565b600061203d602f836125e0565b915061204882612908565b604082019050919050565b6000612060602d836125e0565b915061206b82612957565b604082019050919050565b6000612083600b836125e0565b915061208e826129a6565b602082019050919050565b60006120a66018836125e0565b91506120b1826129cf565b602082019050919050565b60006120c96018836125e0565b91506120d4826129f8565b602082019050919050565b60006120ec6012836125e0565b91506120f782612a21565b602082019050919050565b600061210f6030836125e0565b915061211a82612a4a565b604082019050919050565b60006121326016836125e0565b915061213d82612a99565b602082019050919050565b6000612155601d836125e0565b915061216082612ac2565b602082019050919050565b60006121786016836125e0565b915061218382612aeb565b602082019050919050565b600061219b602f836125e0565b91506121a682612b14565b604082019050919050565b6060820160008201516121c76000850182611fb6565b5060208201516121da60208501826121f3565b5060408201516121ed60408501826121f3565b50505050565b6121fc816126d6565b82525050565b61220b816126d6565b82525050565b61221a816126e0565b82525050565b60006020820190506122356000830184611f0d565b92915050565b60006040820190506122506000830185611f0d565b61225d6020830184611f0d565b9392505050565b600060a0820190506122796000830188611f0d565b818103602083015261228b8187611fd4565b9050818103604083015261229f8186611fd4565b90506122ae6060830185612211565b6122bb6080830184612211565b9695505050505050565b600060208201905081810360008301526122df8184611f1c565b905092915050565b60006020820190506122fc6000830184611f7a565b92915050565b60006020820190506123176000830184611f89565b92915050565b60006020820190506123326000830184611f98565b92915050565b600060208201905061234d6000830184611fa7565b92915050565b60006020820190506123686000830184611fc5565b92915050565b600060208201905081810360008301526123888184611fd4565b905092915050565b600060208201905081810360008301526123a98161200d565b9050919050565b600060208201905081810360008301526123c981612030565b9050919050565b600060208201905081810360008301526123e981612053565b9050919050565b6000602082019050818103600083015261240981612076565b9050919050565b6000602082019050818103600083015261242981612099565b9050919050565b60006020820190508181036000830152612449816120bc565b9050919050565b60006020820190508181036000830152612469816120df565b9050919050565b6000602082019050818103600083015261248981612102565b9050919050565b600060208201905081810360008301526124a981612125565b9050919050565b600060208201905081810360008301526124c981612148565b9050919050565b600060208201905081810360008301526124e98161216b565b9050919050565b600060208201905081810360008301526125098161218e565b9050919050565b600060608201905061252560008301846121b1565b92915050565b60006020820190506125406000830184612202565b92915050565b6000612550612561565b905061255c82826127bb565b919050565b6000604051905090565b600067ffffffffffffffff82111561258657612585612879565b5b61258f826128a8565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006125fc826126d6565b9150612607836126d6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561263c5761263b6127ec565b5b828201905092915050565b6000612652826126d6565b915061265d836126d6565b9250828210156126705761266f6127ec565b5b828203905092915050565b6000612686826126b6565b9050919050565b60008115159050919050565b6000819050919050565b60008190506126b182612b63565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60006126f8826126ff565b9050919050565b600061270a826126b6565b9050919050565b600061271c82612723565b9050919050565b600061272e826126b6565b9050919050565b6000612740826126a3565b9050919050565b82818337600083830152505050565b60005b83811015612774578082015181840152602081019050612759565b83811115612783576000848401525b50505050565b600060028204905060018216806127a157607f821691505b602082108114156127b5576127b461284a565b5b50919050565b6127c4826128a8565b810181811067ffffffffffffffff821117156127e3576127e2612879565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008201527f6473000000000000000000000000000000000000000000000000000000000000602082015250565b7f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008201527f2061646d696e20746f206772616e740000000000000000000000000000000000602082015250565b7f4572726f7220696e2073747564656e744c6973742e757064617465537475646560008201527f6e74416374697665436c61737300000000000000000000000000000000000000602082015250565b7f6e6f742073747564656e74000000000000000000000000000000000000000000600082015250565b7f41636164656d79436c6173733a206e6f74206163746976650000000000000000600082015250565b7f41636164656d79436c6173733a206f6e6c79206f776e65720000000000000000600082015250565b7f73747564656e74206e6f74206578697374730000000000000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008201527f2061646d696e20746f207265766f6b6500000000000000000000000000000000602082015250565b7f41636164656d79436c6173733a206e6f74206f70656e00000000000000000000600082015250565b7f4572726f7220696e2073747564656e744c6973742e616464436c617373000000600082015250565b7f73747564656e7420616c72656164792065786973747300000000000000000000600082015250565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b60038110612b7457612b7361281b565b5b50565b612b808161267b565b8114612b8b57600080fd5b50565b612b978161268d565b8114612ba257600080fd5b50565b612bae81612699565b8114612bb957600080fd5b50565b612bc5816126d6565b8114612bd057600080fd5b50565b612bdc816126e0565b8114612be757600080fd5b5056fea2646970667358221220a9b92d97bc55279ad6be0d6d76405f8c37353a5816ea6bb269e247af092fd61864736f6c63430008010033'

export class AcademyClassFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer)
  }

  deploy(
    addressStudentList: string,
    addressStudentQuiz: string,
    className_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<AcademyClassType> {
    return super.deploy(
      addressStudentList,
      addressStudentQuiz,
      className_,
      overrides || {},
    ) as Promise<AcademyClassType>
  }
  getDeployTransaction(
    addressStudentList: string,
    addressStudentQuiz: string,
    className_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(addressStudentList, addressStudentQuiz, className_, overrides || {})
  }
  attach(address: string): AcademyClassType {
    return super.attach(address) as AcademyClassType
  }
  connect(signer: Signer): AcademyClassFactory {
    return super.connect(signer) as AcademyClassFactory
  }
  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): AcademyClassInterface {
    return new utils.Interface(_abi) as AcademyClassInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): AcademyClassType {
    return new Contract(address, _abi, signerOrProvider) as AcademyClassType
  }
}
