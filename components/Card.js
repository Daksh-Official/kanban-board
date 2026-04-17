import React from 'react'

const Card = ({ card, moveCard, deleteCard, editCard }) => {

    const handleEdit = () => {
        const newTitle = prompt("Edit Title:", card.title);
        const newDesc = prompt("Edit Description:", card.desc);
        if (newTitle !== null && newDesc !== null) {
            editCard(card.id, newTitle, newDesc);
        }
    };
    return (
        <div>
            <div className="card-bg mb-2 rounded-2xl relative group">
                <button 
                    onClick={handleEdit}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-white/20 px-2 py-1 rounded-md text-white"
                >
                    Edit
                </button>
                <h2 className="font-bold border-b p-3">{card.title}</h2>
                <p className='p-3'>{card.desc}</p>
                <div className="flex justify-around items-center mt-4">
                    <div className="flex gap-2 w-1/2 rounded-bl-2xl bg-yellow-600">
                        {card.status === "Pending" && (
                            <button onClick={() => moveCard(card.id, "In Progress")} className="text-sm bg-yellow-600 p-2 w-full cursor-pointer font-semibold rounded-bl-2xl">Start</button>
                        )}
                        {card.status === "In Progress" && (
                            <button onClick={() => moveCard(card.id, "Completed")} className="text-sm bg-green-600 w-full cursor-pointer font-semibold p-2 rounded-bl-xl">Finish</button>
                        )}
                    </div>
                    <button onClick={() => deleteCard(card.id)} className="text-sm cursor-pointer font-semibold bg-red-600 w-1/2 p-2 rounded-br-2xl hover:text-red-200">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
