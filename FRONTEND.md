# Front-end Consistency

## Colors
They are defined as Tailwind colors here

```jsx
maroon: "#731b1d",
darkMaroon: "#4d0000",
weirdGray: "#272a29",
ashyBlue: "#3c4c68",
lightBlue: "#4d8f9f",
```

## Page Layout

For now, we'll have a `24 pixel` padding around the whole page with a `12 pixel` gap between sections. (May change if it looks ugly).

```tsx
import Image from "next/image";

export default function Example() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">

    </main>
  );
}

```

## Fonts

### Headers
They are going to be `XL`, `bold`, `all-caps` in the `Poppins` font.

```tsx
<h2 className='text-xl font-bold uppercase' style={poppins.style}>Example</h2>
```

### Normal text
We will use `Inter` font and default settings.


## Misc

Any other questions on style/consistency, direct to the Discord group chat :)

All of this up to change if it looks bad.