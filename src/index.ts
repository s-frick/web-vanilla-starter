const setup = () => {
    const app = document.getElementById('app') as HTMLDivElement

    const h1 = document.createElement('h1')
    h1.innerText = "Hey there!"

    app.appendChild(h1)
}

setup()