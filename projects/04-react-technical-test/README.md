# Prueba técnica (midudev) Juniors & Trainees de React (Live Coding)

#### APIs:
- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello
- Endpoint para utilizar: https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true

#### Description:
- Recupera un hecho aleatorio de gatos de la primera API.
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primara palabra.

#### Important
- Fetching de datos
- Manejar dos estados, dependiendo uno del otro.
- React test end-to-end

#### Primer paso:
- ```npm create vite@latest```
- name: 04-react-technical-test
- check [Vanilla]
- check [Javascript]

#### Segundo paso:

- ```cd 04-react-technical-test```
- ```npm install @vitejs/plugin-react -E```
- ```npm install react react-dom -E``` [Binding with Navigator]
- create file ```vite.config.js``` [Vite Configuration]
- content-file ```vite.config.js```

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```
#### Tercer paso:
- Definición del punto de entrada del proyecto de ReactJs
- ```main.js``` to ```main.jsx``` into ```index.html```

```js
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(<h1>Hello, world!</h1>)
```
#### Cuarto paso:

- ```npm install standard -D``` [eslint]
- Add config to [```package.json```]

```json
"eslintConfig": {
  "extends": "./node_modules/standard/eslintrc.json"
}
```
