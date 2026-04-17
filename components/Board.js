"use client"
import React from 'react'
import Card from './Card'
import { useState, useEffect } from 'react'

const Board = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const savedData = localStorage.getItem("kanban-board");
        if (savedData) {
            setCards(JSON.parse(savedData));
        }
    }, []);

    const moveCard = (id, newStatus) => {
        const updatedCards = cards.map(card =>
            card.id === id ? { ...card, status: newStatus } : card
        );
        setCards(updatedCards);
        localStorage.setItem("kanban-board", JSON.stringify(updatedCards));
    };

    const deleteCard = (id) => {
        if (window.confirm("Are you sure you want to delete this card?")) {
            const updatedCards = cards.filter(card => card.id !== id);
            setCards(updatedCards);
            localStorage.setItem("kanban-board", JSON.stringify(updatedCards));
        }
    };

    const editCard = (id, newTitle, newDesc) => {
        const updatedCards = cards.map(card =>
            card.id === id ? { ...card, title: newTitle, desc: newDesc } : card
        );
        setCards(updatedCards);
        localStorage.setItem("kanban-board", JSON.stringify(updatedCards));
    };

    return (
        <div>
            <div className="rounded-t-2xl flex items-center gap-3 p-3 justify-end bg-black/30 text-lg font-semibold w-full">
                <span>My Board</span>
                <lord-icon
                    src="https://cdn.lordicon.com/jectmwqf.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: "28px", height: "28px" }}>
                </lord-icon>
            </div>
            <div className="grid grid-cols-3 gap-3 p-3">
                <div className="bg-red-900 min-h-10 h-fit max-h-[76vh] overflow-y-auto custom-scrollbar rounded-md">
                    <h2 className="font-semibold bg-black/40 p-3 rounded-md">Pending</h2>
                    <div className="p-3 flex flex-col gap-3">
                        {cards.filter(card => card.status === "Pending").length > 0 ? (
                            cards.filter(card => card.status === "Pending").map(card => (
                                <Card key={card.id} card={card} moveCard={moveCard} deleteCard={deleteCard} editCard={editCard} />
                            ))
                        ) : (
                            <div className="text-sm opacity-60">Nothing to show yet</div>
                        )}
                    </div>
                </div>
                <div className="bg-yellow-900 min-h-10 h-fit  max-h-[76vh] overflow-y-auto custom-scrollbar rounded-md">
                    <h2 className="font-semibold bg-black/40 p-3 rounded-md">In Progress</h2>
                    <div className="p-3 flex flex-col gap-3">
                        {cards.filter(card => card.status === "In Progress").length > 0 ? (
                            cards.filter(card => card.status === "In Progress").map(card => (
                                <Card key={card.id} card={card} moveCard={moveCard} deleteCard={deleteCard} editCard={editCard} />
                            ))
                        ) : (
                            <div className="text-sm opacity-60">Nothing to show yet</div>
                        )}
                    </div>
                </div>
                <div className="bg-green-700 min-h-10 h-fit  max-h-[76vh] overflow-y-auto custom-scrollbar rounded-md">
                    <h2 className="font-semibold bg-black/40 p-3 rounded-md">Completed</h2>
                    <div className="p-3 flex flex-col gap-3">
                        {cards.filter(card => card.status === "Completed").length > 0 ? (
                            cards.filter(card => card.status === "Completed").map(card => (
                                <Card key={card.id} card={card} moveCard={moveCard} deleteCard={deleteCard} editCard={editCard} />
                            ))
                        ) : (
                            <div className="text-sm opacity-60">Nothing to show yet</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
