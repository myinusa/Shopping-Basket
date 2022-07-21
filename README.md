# Shopping Basket

## Getting Started

`git clone <insert-repo-name>`

`cd project`

`npm install`

`npm run start` - This will start the application and run on port 3332

Visit `http://localhost:3332`

## How the test was completed

### Design
The first task was getting the design to match the visual prototype, I opted to go with `Material UI` for UI. Started with the layout using `Box` and `Container` elements, moving on to the main heading, inserting the divider below it. The table and table container were next with the columns and some fake data. Subtotal, VAT and total below the table with a similar design. 

### Structure 

Initially all the components were housed under the `components` folder but later distributed to `features` folder. Some components like `Table` were split into `Table Container` and `Products` in `features` folder. `Types`, `Assets` and `utils` folder emerged for clearer implementation.

### Functions & Arithmetic

After design I planned out the features needed; Delete product, Increase & Decrease quantity, Input quantity, Buy Now & Arithmetic. All these components and features that are seperated into folders and files would need to share state, rather than prop drilling or using a global state management, I used react context.  


## Project Structure

| Name       | Description                                                           |
| ---------- | --------------------------------------------------------------------- |
| index.tsx  | Application entry point                                               |
| App.ts     | App component                                                         |
| assets     | assets folder can contain all the static files for a specific feature |
| components | components scoped to a specific feature                               |
| types      | typescript types for TS specific feature                              |
| utils      | utility functions for a specific feature                              |
| data       | List of products                                                      |
