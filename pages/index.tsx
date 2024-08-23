import type { NextPage } from 'next'
import {FormEvent, useState} from "react";

const Home: NextPage = () => {
    const [nombre, setNombre] = useState('');
    const [medida, setMedida] = useState('');
    const [celular, setCelular] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let form = {
            nombre,
            medida,
            celular,
            message
        }

        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen
        alert("Pedido Creado!")

        // Reset the form fields
        setNombre('')
        setMedida('')
        setCelular('')
        setMessage('')
    }

    return (
        <main className="bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto py-16">
                <form className="py-4 space-y-4" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center text-indigo-600">Pedí tu helado ya</h2>
                    <div className="flex items-center justify-center">
                        <label htmlFor="nombre" className="sr-only">Nombre</label>
                        <input required value={nombre} onChange={e => setNombre(e.target.value)} type="text" name="nombre" id="nombre" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Tu nombre" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="medida" className="sr-only">Medida</label>
                        <select required value={medida} onChange={e => setMedida(e.target.value)} name="medida" id="medida" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md">
                            <option value="" disabled hidden>Elegi el tamaño</option>
                            <option value="un cuarto">1/4</option>
                            <option value="medio kg">1/2 KG</option>
                            <option value="medio kg">1 KG</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="celular" className="sr-only">Celular</label>
                        <input required value={celular} onChange={e => setCelular(e.target.value)} type="tel" name="celular" id="celular" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Celular" />
                    </div>
                    <div className="flex items-center justify-center">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)} id="message" className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-64 sm:text-md border-gray-300 rounded-md" placeholder="Aclaraciones" />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600">Crear pedido</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Home
