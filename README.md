# solana-idl

```
npm i solana-idl
```

## Usage

```js
const IDL = require('solana-idl')

// IDL => { pump, pump_amm, raydium_amm, ... }
// IDL.pump => { instructions, accounts, events, types, ... }
```

To import a specific file e.g. to optimize app size:

```js
const PumpfunIDL = require('solana-idl/pump.json')
const PumpswapIDL = require('solana-idl/pump_amm.json')
```

List of available IDLs:

- `pump`
- `pump_amm`
- `raydium_amm`
- `raydium_clmm`
- `raydium_cpmm`
- `raydium_launchpad`

## License

MIT
