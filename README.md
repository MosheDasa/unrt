# unrt

A React TypeScript component library.

## Installation

```bash
npm install unrt
```

## Usage

```tsx
import { UnrtButton } from "unrt";

function App() {
  return (
    <div>
      <UnrtButton
        label="Click me"
        onClick={() => console.log("Button clicked!")}
        variant="primary"
      />

      <UnrtButton label="Secondary Button" variant="secondary" />
    </div>
  );
}
```

## Components

### UnrtButton

A customizable button component with primary and secondary variants.

#### Props

| Prop     | Type                     | Default   | Description                       |
| -------- | ------------------------ | --------- | --------------------------------- |
| label    | string                   | required  | The text to display on the button |
| onClick  | () => void               | undefined | Click handler function            |
| variant  | 'primary' \| 'secondary' | 'primary' | Button style variant              |
| disabled | boolean                  | false     | Whether the button is disabled    |

## Development

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build
```

## License

MIT
