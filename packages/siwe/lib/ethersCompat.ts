import {
  Provider,
  verifyMessage as ethersVerifyMessage,
  hashMessage as ethersHashMessage,
  getAddress as ethersGetAddress,
} from 'ethers';

type Ethers6BigNumberish = string | number | bigint;

// NB: This compatibility type omits the `Signature` class defined in ethers v6;
// however, a `Signature` instance is compatible with the object type defined.
type Ethers6SignatureLike =
  | string
  | {
      r: string;
      s: string;
      v: Ethers6BigNumberish;
      yParity?: 0 | 1;
      yParityAndS?: string;
    }
  | {
      r: string;
      yParityAndS: string;
      yParity?: 0 | 1;
      s?: string;
      v?: number;
    }
  | {
      r: string;
      s: string;
      yParity: 0 | 1;
      v?: Ethers6BigNumberish;
      yParityAndS?: string;
    };

export type { Provider };
export const verifyMessage: (
  message: Uint8Array | string,
  sig: Ethers6SignatureLike,
) => string = ethersVerifyMessage;
export const hashMessage: (message: Uint8Array | string) => string =
  ethersHashMessage;
export const getAddress: (address: string) => string = ethersGetAddress;
