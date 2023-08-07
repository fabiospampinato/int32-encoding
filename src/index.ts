
/* MAIN */

const Int32 = {

  /* API */

  encode: ( data: number ): Uint8Array => {

    if ( data !== ( data >> 0 ) ) throw new Error ( 'Invalid 32-bit integer' );

    const byte1 = ( data >> 24 ) & 0xFF;
    const byte2 = ( data >> 16 ) & 0xFF;
    const byte3 = ( data >> 8 ) & 0xFF;
    const byte4 = ( data >> 0 ) & 0xFF;

    return new Uint8Array ([ byte1, byte2, byte3, byte4 ]);

  },

  decode: ( data: Uint8Array ): number => {

    if ( data.length !== 4 ) throw new Error ( 'Invalid 32-bit integer' );

    const byte1 = data[0];
    const byte2 = data[1];
    const byte3 = data[2];
    const byte4 = data[3];

    return ( byte1 << 24 ) + ( byte2 << 16 ) + ( byte3 << 8 ) + ( byte4 << 0 );

  }

};

/* EXPORT */

export default Int32;
