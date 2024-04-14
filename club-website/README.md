# TAO Club Website

Public-facing website for TAO :D

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Technologies used

- [Next.js](https://nextjs.org/) 
- [Node.js](https://nodejs.org/)
- CSS Framework - [Tailwind CSS](https://tailwindcss.com/)
  - if you are new to CSS in general, just search up: "whatever you want to do in CSS" and then search up "that result in Tailwind"
    - ex. "center div in CSS" > `align-items: center; justify-items: center;` > "align-items: center in Tailwind CSS"
  - make sure you get the Tailwind extension on VScode!! (lowkey necessary for dev experience)
- CSS Components - [Shadcn/ui](https://ui.shadcn.com/)
- Icons - [react-icons](https://react-icons.github.io/react-icons/)
- [Typescript](https://www.typescriptlang.org/)

If you are having trouble with anything specific to these technologies, check above! :)

## Stuff to Assist in Development

- TAO Stuff
  - [Logos and Designs](https://drive.google.com/drive/folders/1xZcScyDOx6dwo6i8WMJnhN3hoYV1WTlj?usp=drive_link)
  - [Review Information](https://docs.google.com/document/d/1ZuCh0b6TZ6wnmYsaG8V0OgZT8ZA8_tVggCuiqmF89LU/edit?usp=sharing)
  - [Meeting Information](https://docs.google.com/document/d/1rjiwPxXcW5ZxWXkjnDhKQ7CJljTLGLdVWQtS12sNpyI/edit?usp=sharing)
- Design
  - [Figma](https://www.figma.com/file/hAHfu8CzkC4Tq6IcmUOErS/TAO-Website?type=design&node-id=0%3A1&mode=design&t=SKFlEnWEer3fJKiw-1)
  - Notes on how to keep the frontend consistent - `FRONTEND.md` 
  

## Development

### Cloning the repo
Clone the repo

```bash
git clone git@github.com:TAO-ENGR/club-website.git
```

Go into the project

```bash
cd club-website 
```

Make your branch

```bash
git checkout -b "feature/your_name"
# for example: footer/andrew
```


### Run locally

Go into the right sub-folder:

```bash
cd club-website 
# yes there are two folders called the same thing
```

If this is your first time running the project, make sure you add all the node-modules:

```bash
npm install
# or
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Commit changes 

Add files

```bash
git add .
```

Commit changes

```bash
git commit -m "this is my message about my commit"
```

```bash
git push
```

### Done with changes

Make a PR on GitHub for your changes to get reviewed :)
