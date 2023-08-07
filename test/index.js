
/* IMPORT */

import {describe} from 'fava';
import Int32 from '../dist/index.js';

/* HELPERS */

const MAX_POSITIVE = ( ( 2 ** 31 ) - 1 ) >> 0;
const MIN_NEGATIVE = ( ( 2 ** 31 ) ) >> 0;

/* MAIN */

describe ( 'Int 32 Encoding', it => {

  it ( 'works with 32-bit positive numbers', t => {

    for ( let i = 0, l = MAX_POSITIVE; i < l; i++ ) {

      const encoded = Int32.encode ( i );

      t.is ( encoded.length, 4 );

      const decoded = Int32.decode ( encoded );

      t.is ( decoded, i );

    }

  });

  it ( 'works with 32-bit negative numbers', t => {

    for ( let i = MIN_NEGATIVE; i <= 0; i++ ) {

      const encoded = Int32.encode ( i );

      t.is ( encoded.length, 4 );

      const decoded = Int32.decode ( encoded );

      t.is ( decoded, i );

    }

  });

  it ( 'throws if out of bounds', t => {

    t.throws ( () => Int32.encode ( MAX_POSITIVE + 1 ) );
    t.throws ( () => Int32.encode ( MIN_NEGATIVE - 1 ) );

  });

});
