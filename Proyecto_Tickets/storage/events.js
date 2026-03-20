import { saveData } from "../storage/storage.js";

export const initEvents = () => {
    if (!localStorage.getItem("events")) {
        const events = [
            { id: 1, 
            name: "Bad Bunny Live",
            city: "Guatemala",
            price: 120,
            date: "2026-07-08",
            category: "Reggaeton",
            image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Gran concierto de Bad Bunny"
        },
        {
            id: 2,
            name: "Luis Fonsi Live",
            city: "Guatemala",
            price: 120,
            date: "2026-07-08",
            category: "Reggaeton",
            image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Gran concierto de Luis Fonsi"
        }
        ];
        saveData("events", events);
        return [
            { id: 1, 
            name: "Bad Bunny Live",
            city: "Guatemala",
            price: 120,
            date: "2026-07-08",
            category: "Reggaeton",
            image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Gran concierto de Bad Bunny"
            },
            {
                id: 2,
                name: "Luis Fonsi Live",
                city: "Guatemala",
                price: 120,
                date: "2026-07-08",
                category: "Reggaeton",
                image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                description: "Gran concierto de Luis Fonsi"
            }
            
        ];
        saveData("events", events);
    }
}