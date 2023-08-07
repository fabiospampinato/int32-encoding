# Int32 Encoding

Int32 encoding, a simple way to convert 32-bit signed integers to Uint8Arrays, and vice versa.

The produced Uint8Array will always be 4-bytes long.

## Install

```sh
npm install --save int32-encoding
```

## Usage

```ts
import Int32 from 'int32-encoding';

{ // It works with positive 32-bit numbers
  const encoded = Int32.encode ( 1234567890 ); // => Uint8Array(4) [73, 150, 2, 210]
  const decoded = Int32.decode ( new Uint8Array ([ 73, 150, 2, 210 ]) ); // => 1234567890
}

{ // It works with negative 32-bit numbers
  const encoded = Int32.encode ( -1234567890 ); // => Uint8Array(4) [182, 105, 253, 46]
  const decoded = Int32.decode ( new Uint8Array ([ 182, 105, 253, 46 ]) ); // => -1234567890
}
```

## License

MIT © Fabio Spampinato
