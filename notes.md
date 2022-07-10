# Installation

---

## TAILWIND

```Bash
npm i tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

index.css

```Css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind.config.js

```Javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## ROUTING

V6 React Router & Reach Router get merged in react-router-dom which allow nested routes and layout systems.

```Bash
npm i react-router-dom
```

## FORMS

```Bash
npm i formik yup
```

eg.

```Jsx
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const MyForm = () => {

  const newClientSchema = Yup.object().shape({
    name: Yup.string().required("Client's name is required."),
  });

  return (
  <Formik initialValues={{ name: "" }}
    onSubmit={(values)=>{console.log(values)}}
    validationSchema = {newClientSchema} >
    {({error, touched}) =>
    { return (
      <Form className="mt-10">
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Name
          </label>
          <Field
            id="name"
            type="password"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="clients name"
            name="name"
          />
          {errors.company && touched.company && (
            <FormError>{errors.company}</FormError>
          )}
        </div>
        <input
          type="submit"
          value="Add Client"
          className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
        />
      </Form>
      )}}
    </Formik>
  )
}
```

## REST API - JSON SERVER

```Bash
npm i -g json-server
```

Create `db.json` on root

```Bash
json-server --watch db.json --port 4000
```

## Spinners

https://tobiasahlin.com/spinkit/
